import { all } from 'redux-saga/effects';

import signin from './signin/sagas';
import repositories from './repositories/sagas';

export default function* rootSaga() {
  return yield all([signin, repositories]);
}
