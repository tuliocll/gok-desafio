import React from 'react';
import { GestureResponderEvent, ViewStyle } from 'react-native';

import ButtonContainer, { ButtonText } from './style';

interface IGhostButton {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
}

export const GhostButton = ({
  text,
  onPress,
  style,
}: IGhostButton): React.ReactElement => {
  return (
    <ButtonContainer onPress={onPress} style={style}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
