import React from 'react';

import { ImageStyle } from 'react-native';
import { Image } from './style';
import logo from '../../assets/images/logo.png';

interface ILogo {
  style?: ImageStyle;
}

export const Logo = ({ style }: ILogo): React.ReactElement => {
  return <Image source={logo} resizeMode="contain" style={style} />;
};
