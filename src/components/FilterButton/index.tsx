import React from 'react';
import { GestureResponderEvent, Platform } from 'react-native';

import { Icon, Container } from './style';

interface IFilterButton {
  onPress?: (event: GestureResponderEvent) => void;
}

export const FilterButton = ({
  onPress,
}: IFilterButton): React.ReactElement => {
  return (
    <Container onPress={onPress} ios={Platform.OS === 'ios'}>
      <Icon name="filter-variant" />
    </Container>
  );
};
