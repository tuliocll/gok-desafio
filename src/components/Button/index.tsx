import React from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';

import ButtonContainer, { ButtonText } from './style';

interface IButton {
  testID?: string;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
}

export const Button = ({
  testID,
  text,
  onPress,
  style,
}: IButton): React.ReactElement => {
  return (
    <ButtonContainer testID={testID} onPress={onPress} style={style}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
