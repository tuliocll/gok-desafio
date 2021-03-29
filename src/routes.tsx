import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './views/Login';
import Home from './views/Home';
import Repositories from './views/Repositorys';
import NewUser from './views/NewUser';

function Routes(): React.ReactElement {
  const Stack = createStackNavigator();

  const users = useSelector(state => state.signin.users);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {users && users.length === 0 && (
        <Stack.Screen name="Login" component={Login} />
      )}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Repositories" component={Repositories} />
      <Stack.Screen name="NewUser" component={NewUser} />
    </Stack.Navigator>
  );
}

export default Routes;
