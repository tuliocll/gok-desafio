/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { navigationRef } from './services/navigation';
import Routes from './routes';

import { store, persistor } from './store';

const App = (): React.ReactElement => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
