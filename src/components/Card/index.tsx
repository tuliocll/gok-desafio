import React from 'react';
import { ViewStyle, Platform } from 'react-native';

import { Container } from './style';

export const Card = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}): React.ReactElement => {
  return (
    <>
      <Container style={style} ios={Platform.OS === 'ios'}>
        {children}
      </Container>
    </>
  );
};
