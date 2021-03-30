import React from 'react';
import { GestureResponderEvent, Platform } from 'react-native';

import { Icon, Container } from './style';

interface ISearchButton {
  onPress?: (event: GestureResponderEvent) => void;
}

export const SearchButton = ({
  onPress,
}: ISearchButton): React.ReactElement => {
  return (
    <Container onPress={onPress} ios={Platform.OS === 'ios'}>
      <Icon name="magnify" />
    </Container>
  );
};
