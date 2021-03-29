import React from 'react';
import { GestureResponderEvent, TextStyle } from 'react-native';

import { TextStyled } from './style';

interface IText {
  children: React.ReactNode;
  isLink?: boolean;
  style?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

export const Text = ({
  children,
  isLink,
  style,
  onPress,
}: IText): React.ReactElement => {
  return (
    <TextStyled isLink={isLink} onPress={onPress} style={style}>
      {children}
    </TextStyled>
  );
};
