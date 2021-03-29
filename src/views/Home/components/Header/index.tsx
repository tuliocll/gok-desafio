import React from 'react';

import { Nav, Logo, Button } from '../../../../components';

import { View } from './style';

const Header = ({
  testID,
  onButonPress,
}: {
  testID?: string;
  onButonPress?: () => void;
}): React.ReactElement => {
  return (
    <Nav>
      <View testID={testID}>
        <Logo style={{ width: '30%' }} />
        <Button
          text="Adicionar novo"
          style={{ width: '45%' }}
          onPress={onButonPress}
        />
      </View>
    </Nav>
  );
};

export default Header;
