import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { signInRequest } from '../../store/modules/signin/actions';
import { Button, Input, Title, Text, Logo } from '../../components';
import { View, Container } from './styles';

const Login = (): React.ReactElement => {
  const [username, setUsername] = useState('');
  const users = useSelector(state => state.signin.users);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  function goToUrl() {
    Linking.canOpenURL('https://www.google.com').then(supported => {
      if (supported) {
        Linking.openURL('https://www.google.com');
      }
    });
  }

  function getValue(text: string) {
    setUsername(text);
  }

  function register() {
    dispatch(signInRequest(username));
  }

  useEffect(() => {
    if (users && users.length > 0) {
      navigation.navigate('Home');
    }
  }, [users]);

  return (
    <Container>
      <View style={{ alignItems: 'center' }}>
        <Logo />
      </View>
      <View>
        <Title text="Buscar usuário" />
        <Text>Crie sua conta através do seu usuário do Github</Text>
        <Input
          testID="username"
          placeholder="@username"
          onTextChange={getValue}
          onEndEditing={register}
          debouce={false}
        />
        <Button testID="register-button" text="Cadastrar" onPress={register} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>
          Termos de{' '}
          <Text isLink onPress={goToUrl}>
            politica
          </Text>{' '}
          e{' '}
          <Text isLink onPress={goToUrl}>
            privacidade
          </Text>
        </Text>
      </View>
    </Container>
  );
};

export default Login;
