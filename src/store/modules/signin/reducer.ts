/* eslint-disable no-param-reassign */
import produce from 'immer';

import IUser from '../../../interfaces/IUser';

const INITIAL_STATE: {
  users: Array<IUser>;
  loading: boolean;
} = {
  users: [],
  loading: false,
};

interface Action {
  type: string;
  payload: { user: IUser; id: number };
}

export default function auth(state = INITIAL_STATE, action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        if (draft.users.some(user => user.id === action.payload.user.id)) {
          break;
        }

        draft.users.push(action.payload.user);
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/DELETE_USER': {
        const updatedUsers = draft.users.filter(
          usr => usr.id !== action.payload.id,
        );

        draft.users = updatedUsers;
        break;
      }

      default:
        return state;
    }
  });
}
