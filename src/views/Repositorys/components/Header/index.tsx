import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import IUser from '../../../../interfaces/IUser';
import { Nav, Avatar, IconButton } from '../../../../components';
import { View } from './style';

const Header = ({ testID }: { testID?: string }): React.ReactElement => {
  const navigation = useNavigation();

  const users = useSelector(state => state.signin.users);
  const [user, setUser] = useState<IUser>();
  const route = useRoute();

  function goBack() {
    navigation.goBack();
  }

  useEffect(() => {
    if (route?.params?.username) {
      setUser(users.find(usr => usr.login === route.params.username));
    }
  }, [route?.params?.username]);

  return (
    <Nav>
      <View testID={testID}>
        <IconButton
          iconName="arrow-left"
          backgroundColor="transparent"
          iconSize={35}
          onPress={goBack}
        />
        <Avatar
          imageUrl={user?.avatar_url || 'https://via.placeholder.com/40'}
          size={40}
        />
      </View>
    </Nav>
  );
};

export default Header;
