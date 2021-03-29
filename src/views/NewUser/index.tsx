import React, { useState } from 'react';
import { Linking } from 'react-native';
import { useDispatch } from 'react-redux';

import { signInRequest } from '../../store/modules/signin/actions';
import { Button, Input, Title, Text, Logo } from '../../components';
import { View, Container } from './styles';
import Header from './components/Header';

const Login = (): React.ReactElement => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

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

  return (
    <>
      <Header />
      <Container>
        <View
          style={{
            alignItems: 'flex-start',
            marginTop: 100,
            marginBottom: 50,
          }}>
          <Logo />
        </View>
        <View>
          <Title text="Buscar usuário" />
          <Text style={{ marginBottom: 30 }}>
            Adicioine seus novos usuários do Github
          </Text>
          <Input
            placeholder="@username"
            onTextChange={getValue}
            onEndEditing={register}
            debouce={false}
          />
          <Button text="Cadastrar" onPress={register} />
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
    </>
  );
};

export default Login;
