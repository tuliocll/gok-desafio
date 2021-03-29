import AsyncStorage from '@react-native-community/async-storage';

import { persistReducer } from 'redux-persist';
import { Reducer } from 'redux';

export default (reducers: Reducer<any, any>): Reducer<any, any> => {
  const persistedReducers = persistReducer(
    {
      key: 'go.k',
      storage: AsyncStorage,
      whitelist: ['signin', 'repositories'],
    },
    reducers,
  );

  return persistedReducers;
};
