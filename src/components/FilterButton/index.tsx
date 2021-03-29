import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { Icon, Container } from './style';

interface IFilterButton {
  onPress?: (event: GestureResponderEvent) => void;
}

export const FilterButton = ({
  onPress,
}: IFilterButton): React.ReactElement => {
  return (
    <Container onPress={onPress}>
      <Icon name="filter-variant" />
    </Container>
  );
};
