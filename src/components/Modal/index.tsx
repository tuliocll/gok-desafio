import React, { useEffect, useState } from 'react';
import { Modal as ModalComponent, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTagsRequest,
  addTagToRepository,
  removeTagFromRepository,
} from '../../store/modules/repositories/actions';

import { Button } from '../Button';
import { GhostButton } from '../GhostButton';
import { Input } from '../Input';
import { Title } from '../Title';
import { Suggestions } from '../Suggestions';
import { Tag } from '../Tag';

import { Container, Body } from './style';

interface IModal {
  visible?: boolean;
  onClose?: () => void;
  id?: number;
  username?: string;
}

export const Modal = ({
  onClose,
  visible,
  id,
  username,
}: IModal): React.ReactElement => {
  const dispatch = useDispatch();
  const [insertTag, setInsertTag] = useState('');
  const [suggestions, setSuggestions] = useState<Array<string>>();
  const [currentTags, setCurrentTags] = useState<Array<string>>([]);
  const repositories = useSelector(state => state.repositories.repositories);
  const suggestionsTags = useSelector(state => state.repositories.tags);

  function getSuggestionsTags() {
    const userRepos = repositories?.find(repo => repo.username === username);

    if (!userRepos) {
      return;
    }

    const repository = userRepos.data.filter(repo => repo.id === id);

    if (repository && repository.length > 0 && repository[0].owner) {
      dispatch(fetchTagsRequest(repository[0].owner.login, repository[0].name));
    }
  }

  function onAddTag(tag: string) {
    const userRepos = repositories?.find(repo => repo.username === username);

    if (!userRepos) {
      return;
    }

    const repository = userRepos.data.filter(repo => repo.id === id);
    if (repository && username && repository.length > 0) {
      dispatch(addTagToRepository(tag, repository[0].name, username));
      getSuggestionsTags();
    }
  }

  function onRemoveTag(tag: string) {
    const userRepos = repositories?.find(repo => repo.username === username);

    if (!userRepos) {
      return;
    }

    const repository = userRepos.data.filter(repo => repo.id === id);
    if (repository && username && repository.length > 0) {
      dispatch(removeTagFromRepository(tag, repository[0].name, username));
      getSuggestionsTags();
    }
  }

  function addManualTag() {
    onAddTag(insertTag);
    setInsertTag('');
  }

  useEffect(() => {
    getSuggestionsTags();
  }, [visible]);

  useEffect(() => {
    const userRepos = repositories?.find(repo => repo.username === username);

    if (!userRepos) {
      return;
    }

    const repository = userRepos.data.filter(repo => repo.id === id);

    const repoTags = repository[0]?.tags || [];

    const tagsSuggestions =
      Object.keys(suggestionsTags.tags).length > 0
        ? Object.keys(suggestionsTags.tags)
        : ['Markdown', 'Empty'];

    const removeDuplicated = tagsSuggestions.filter(
      tag => !repoTags.includes(tag),
    );
    const finalTags = Array.from(removeDuplicated);

    setCurrentTags(repoTags);

    setSuggestions(finalTags);
  }, [suggestionsTags]);

  return (
    <ModalComponent
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <Container>
        <Body>
          <Title text="Adicionar tags" />
          <Input
            value={insertTag}
            onTextChange={setInsertTag}
            onEndEditing={addManualTag}
            iconName="magnify"
            placeholder="Adicionar uma tag"
            debouce={false}
          />
          <ScrollView horizontal style={{ marginBottom: 25 }}>
            {currentTags.map(tag => (
              <Tag
                key={tag}
                text={tag}
                iconName="close"
                onIconPress={onRemoveTag}
              />
            ))}
          </ScrollView>
          <Suggestions suggestions={suggestions} onAddTag={onAddTag} />
          <Button text="Salvar" onPress={onClose} />
          <GhostButton text="Cancelar" onPress={onClose} />
        </Body>
      </Container>
    </ModalComponent>
  );
};
