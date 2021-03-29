import React, { useState, useEffect } from 'react';

import { Container, InputText, AccountIcon } from './style';
import useDebounce from '../../hooks/useDebounce';

interface IInput {
  placeholder?: string;
  onTextChange?: (text: string) => void;
  onEndEditing?: () => void;
  iconName?: string;
  value?: string;
  debouce?: boolean;
  testID?: string;
}

export const Input = ({
  testID,
  placeholder,
  onTextChange,
  onEndEditing,
  iconName = 'account-circle',
  value,
  debouce = true,
}: IInput): React.ReactElement => {
  const [search, setSearch] = useState('');
  const deboucedSearch = useDebounce({ value: search, delay: 200 });

  useEffect(() => {
    if (!onTextChange) {
      return;
    }

    onTextChange(deboucedSearch);
  }, [deboucedSearch]);

  return (
    <Container>
      <AccountIcon name={iconName} />
      <InputText
        testID={testID}
        placeholder={placeholder}
        onChangeText={debouce ? setSearch : onTextChange}
        autoCapitalize="none"
        autoCompleteType="off"
        value={value}
        onEndEditing={onEndEditing}
      />
    </Container>
  );
};
