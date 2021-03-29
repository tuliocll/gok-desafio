import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

import { Container, Icon, TextInput } from './style';

interface ISearch {
  onTextChange?: (text: string) => void;
  onEndEdit?: (text: string) => void;
  value?: string;
  filter?: boolean;
  testID?: string;
}

export const Search = ({
  onTextChange,
  value,
  filter,
  onEndEdit,
  testID,
}: ISearch): React.ReactElement => {
  const [search, setSearch] = useState('');
  const deboucedSearch = useDebounce({ value: search, delay: 500 });

  useEffect(() => {
    if (!onTextChange) {
      return;
    }

    onTextChange(deboucedSearch);
  }, [deboucedSearch]);

  useEffect(() => {
    if (value) {
      setSearch(value);
    }
  }, [value]);

  function onEnd() {
    if (onEndEdit) {
      onEndEdit(search);
      setSearch('');
    }
  }

  return (
    <Container testID={testID}>
      <Icon name={filter ? 'filter-variant' : 'magnify'} />
      <TextInput
        placeholder="Buscar um repositório..."
        value={search}
        onChangeText={text => setSearch(text)}
        onEndEditing={onEnd}
      />
    </Container>
  );
};
