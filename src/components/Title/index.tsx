import React from 'react';

import { Text } from './style';

interface ITitle {
  text: string;
}

export const Title = ({ text }: ITitle): React.ReactElement => {
  return <Text>{text}</Text>;
};
