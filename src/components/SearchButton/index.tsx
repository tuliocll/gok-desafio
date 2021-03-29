import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { Icon, Container } from './style';

interface ISearchButton {
  onPress?: (event: GestureResponderEvent) => void;
}

export const SearchButton = ({
  onPress,
}: ISearchButton): React.ReactElement => {
  return (
    <Container onPress={onPress}>
      <Icon name="magnify" />
    </Container>
  );
};
