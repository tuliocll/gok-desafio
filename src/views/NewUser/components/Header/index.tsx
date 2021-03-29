import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Nav, IconButton } from '../../../../components';
import { View } from './style';

const Header = (): React.ReactElement => {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <Nav>
      <View>
        <IconButton
          iconName="arrow-left"
          backgroundColor="transparent"
          iconSize={35}
          onPress={goBack}
        />
      </View>
    </Nav>
  );
};

export default Header;
