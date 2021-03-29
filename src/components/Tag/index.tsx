import React from 'react';
import { ViewStyle } from 'react-native';

import { Container, TagText, Icon, IconContainer } from './style';

interface ITag {
  text: string;
  onPress?: (text: string) => void;
  onIconPress?: (text: string) => void;
  iconName?: string;
  style?: ViewStyle;
  iconBackgroundColor?: string;
  iconColor?: string;
}

export const Tag = ({
  text,
  onPress,
  onIconPress,
  iconName = 'close',
  iconBackgroundColor = '#000',
  iconColor = '#fff',
  style,
}: ITag): React.ReactElement => {
  function onClick() {
    if (onPress) {
      onPress(text);
    }
  }

  function onRemove() {
    if (onIconPress) {
      onIconPress(text);
    }
  }

  return (
    <Container onPress={onClick} deletable={!onPress} style={style}>
      <TagText>{text}</TagText>
      {onIconPress && (
        <IconContainer
          onPress={onRemove}
          iconBackgroundColor={iconBackgroundColor}>
          <Icon name={iconName} iconColor={iconColor} />
        </IconContainer>
      )}
    </Container>
  );
};
