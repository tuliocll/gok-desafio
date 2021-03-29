import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Header from './components/Header';
import { List } from '../../components';
import ItemList from './components/ItemList';
import { Container } from './style';

import { deleteUser } from '../../store/modules/signin/actions';

const Home = (): React.ReactElement => {
  const users = useSelector(state => state.signin.users);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleClick(id: number) {
    const user = users.find(usr => usr.id === id);
    if (user) {
      navigation.navigate('Repositories', { username: user?.login });
    }
  }

  function handleDelete(id: number) {
    dispatch(deleteUser(id));
  }

  function onHeaderButton() {
    navigation.navigate('NewUser');
  }

  useEffect(() => {
    if (users && users.length === 0) {
      navigation.navigate('Login');
    }
  }, [users]);

  return (
    <>
      <Header testID="header" onButonPress={onHeaderButton} />
      <Container>
        <List
          testID="users-list"
          items={users}
          renderItem={data => (
            <ItemList
              data={data.item}
              onPress={handleClick}
              onDelete={handleDelete}
            />
          )}
        />
      </Container>
    </>
  );
};

export default Home;
