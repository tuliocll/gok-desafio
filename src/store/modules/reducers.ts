import { combineReducers } from 'redux';

import signin from './signin/reducer';
import repositories from './repositories/reducer';

export default combineReducers({
  signin,
  repositories,
});
