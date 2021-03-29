import React from 'react';
import { ViewStyle } from 'react-native';

import { Container } from './style';

export const Card = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}): React.ReactElement => {
  return <Container style={style}>{children}</Container>;
};
