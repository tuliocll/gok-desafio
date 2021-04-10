import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRepositories } from '../../store/modules/repositories/actions';
import Header from './components/Header';
import ItemList from './components/ItemList';
import {
  List,
  Search,
  Row,
  Col,
  FilterButton,
  SearchButton,
  Tag,
  Text,
  Modal,
} from '../../components';
import { Container } from './style';

import IRepository from '../../interfaces/IRepository';

const Repositories = (): React.ReactElement => {
  const route = useRoute();
  const dispatch = useDispatch();
  const repositories = useSelector(state => state.repositories.repositories);
  const repositoriesLoading = useSelector(state => state.repositories.loading);
  const users = useSelector(state => state.signin.users);

  const [filteredItems, setFilteredItems] = useState<Array<IRepository>>([]);
  const [customSearch, setCustomSearch] = useState('');
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [filterSearch, setFilterSearch] = useState(['Javascript', 'Nodejs']);
  const [tagsModal, setTagsModal] = useState(false);
  const [editId, setEditId] = useState<number>();

  function onSearch(text: string) {
    if (text === '#') {
      return;
    }

    const userRepos = repositories?.find(
      repo => repo.username === route.params?.username,
    );

    if (!userRepos) {
      return;
    }

    if (!text && filteredItems.length !== userRepos?.data.length) {
      setFilteredItems(userRepos.data);
      return;
    }

    if (!text) {
      return;
    }

    const filtered: Array<IRepository> = [];
    userRepos.data.forEach(item => {
      item?.tags?.forEach(tag => {
        if (tag.toLowerCase().includes(text.toLowerCase())) {
          filtered.push(item);
        }
      });
    });

    setFilteredItems(filtered);
  }

  function searchFilter() {
    if (filterSearch.length === 0) {
      setFilteredItems([]);
      return;
    }

    const userRepos = repositories?.find(
      repo => repo.username === route.params?.username,
    );

    if (!userRepos) {
      return;
    }

    const normalizedFilter = filterSearch.map(filter => filter.toLowerCase());

    const filtered: Array<IRepository> = [];
    userRepos?.data.forEach(item => {
      item?.tags?.forEach(tag => {
        if (normalizedFilter.includes(tag.toLowerCase().replace(/^#/, ''))) {
          const check = filtered.some(filter => filter.id === item.id);

          if (!check) {
            filtered.push(item);
          }
        }
      });
    });

    setFilteredItems(filtered);
  }

  function onTagPress(text: string) {
    setCustomSearch(text.replace(/^#/, ''));
  }

  function changeSearchBar() {
    if (!filterEnabled) {
      searchFilter();
    }
    setFilterEnabled(!filterEnabled);
  }

  function onAddFilter(text: string) {
    if (filterSearch.find(filter => filter === text)) {
      return;
    }

    const updateFilter = [...filterSearch];
    updateFilter.push(text);

    setFilterSearch(updateFilter);
  }

  function onDeleteFilter(text: string) {
    const updateFilter = filterSearch.filter(filter => filter !== text);

    setFilterSearch(updateFilter);
  }

  function handleEdit(id: number) {
    setEditId(id);
    setTagsModal(true);
  }

  function closeEditModal() {
    setTagsModal(false);
  }

  useEffect(() => {
    if (route?.params?.username) {
      dispatch(fetchRepositories(route.params?.username));
    }
  }, [route?.params?.username]);

  useEffect(() => {
    searchFilter();
  }, [filterSearch]);

  useEffect(() => {
    if (repositories) {
      const userRepos = repositories?.find(
        repo => repo.username === route.params?.username,
      );

      if (userRepos) {
        setFilteredItems(userRepos.data);
      }
    }
  }, [repositories]);

  return (
    <>
      <Header testID="header" />
      <Container>
        <Modal
          visible={tagsModal}
          onClose={closeEditModal}
          id={editId}
          username={route?.params?.username}
        />
        <Col>
          {filterEnabled ? (
            <>
              <Row style={{ paddingLeft: 10 }}>
                <Col style={{ width: '15%', marginRight: 5 }}>
                  <SearchButton onPress={changeSearchBar} />
                </Col>
                <Col style={{ width: '82%' }}>
                  <Search onEndEdit={onAddFilter} filter />
                </Col>
              </Row>
              <ScrollView
                horizontal
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  height: 30,
                  paddingLeft: 5,
                }}
                contentContainerStyle={{
                  width: filterSearch.length === 0 ? '100%' : 'auto',
                }}>
                {filterSearch.map(filter => (
                  <Tag
                    key={filter}
                    text={filter}
                    onIconPress={onDeleteFilter}
                  />
                ))}
                {filterSearch.length === 0 && (
                  <Row
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>No tags</Text>
                  </Row>
                )}
              </ScrollView>
            </>
          ) : (
            <Row>
              <Col style={{ width: '82%', paddingLeft: 10 }}>
                <Search
                  testID="search-repo"
                  onTextChange={onSearch}
                  value={customSearch}
                />
              </Col>
              <Col>
                <FilterButton onPress={changeSearchBar} />
              </Col>
            </Row>
          )}

          <List
            testID="repo-list"
            items={filteredItems}
            loading={repositoriesLoading}
            renderItem={data => (
              <ItemList
                data={data.item}
                onTagPress={onTagPress}
                onEdit={handleEdit}
              />
            )}
          />
        </Col>
      </Container>
    </>
  );
};

export default Repositories;
