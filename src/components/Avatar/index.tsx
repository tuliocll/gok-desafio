import React from 'react';

import { Image } from './style';

export const Avatar = ({
  imageUrl,
  size,
}: {
  imageUrl: string;
  size?: number;
}): React.ReactElement => {
  return <Image source={{ uri: imageUrl }} size={size} />;
};
