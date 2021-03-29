import React from 'react';

import { Container, Icon } from './style';

interface IIconButton {
  iconName: string;
  backgroundColor?: string;
  iconColor?: string;
  onPress?: () => void;
  iconSize?: number;
}

export const IconButton = ({
  iconName,
  onPress,
  backgroundColor,
  iconColor,
  iconSize,
}: IIconButton): React.ReactElement => {
  return (
    <Container onPress={onPress} backgroundColor={backgroundColor}>
      <Icon name={iconName} iconColor={iconColor} iconSize={iconSize} />
    </Container>
  );
};
