import React from 'react';
import { TextStyle } from 'react-native';

import { Container, Text, Icon } from './style';

interface ILabel {
  style?: TextStyle;
  text: string | number;
  iconName: string;
}

export const Label = ({
  style,
  text,
  iconName,
}: ILabel): React.ReactElement => {
  return (
    <Container style={style}>
      <Icon name={iconName} />
      <Text>{text}</Text>
    </Container>
  );
};
