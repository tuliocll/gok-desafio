/* eslint-disable camelcase */
import { takeLatest, call, put, all } from 'redux-saga/effects';

import IUser from '../../../interfaces/IUser';
import api from '../../../services/api';
import * as NavigationService from '../../../services/navigation';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }: { payload: { username: string } }) {
  try {
    const { username } = payload;

    const response: IUser = yield call(api, `/users/${username}`, 'GET');

    if (response.message) {
      if (response.message === 'Not Found') {
        alert('Usuario não encontrado');
      }
      return;
    }

    yield put(signInSuccess(response));

    NavigationService.navigate('Home');
  } catch (err) {
    yield put(alert('Parece que você inseriu um usuario invalido'));

    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
