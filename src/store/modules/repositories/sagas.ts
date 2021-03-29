/* eslint-disable camelcase */
import { takeLatest, call, put, all, takeEvery } from 'redux-saga/effects';

import IRepository from '../../../interfaces/IRepository';
import api from '../../../services/api';
import * as NavigationService from '../../../services/navigation';

import { fetchSuccess, fetchFailure, fetchTagSuccess } from './actions';

export function* fetch({ payload }: { payload: { username: string } }) {
  try {
    const { username } = payload;

    const response: Array<IRepository> = yield call(
      api,
      `/users/${username}/starred`,
      'GET',
    );

    if (response.length === 0) {
      alert('Este usuario não possui repositorios');
      NavigationService.navigate('Home');
      return;
    }

    yield put(fetchSuccess(response, username));
  } catch (err) {
    alert('Não foi possivel buscar os repositorios');
    console.log(err);
    yield put(fetchFailure());
  }
}

export function* fetchTags({
  payload,
}: {
  payload: { username: string; repository: string };
}) {
  try {
    const { username, repository } = payload;

    const response: Record<string, string> = yield call(
      api,
      `/repos/${username}/${repository}/languages`,
      'GET',
    );

    // const response = { javascript: 1, nodejs: 2 };

    yield put(
      fetchTagSuccess({
        username,
        repository,
        tags: response,
      }),
    );
  } catch (err) {
    yield put(alert('Não foi possivel buscar os repositorios'));

    yield put(fetchFailure());
  }
}

export default all([
  takeLatest('@repositories/FETCH_REQUEST', fetch),
  takeEvery('@repositories/FETCH_TAGS_REQUEST', fetchTags),
]);
