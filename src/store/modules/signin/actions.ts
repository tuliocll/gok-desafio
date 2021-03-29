/* eslint-disable camelcase */
import IUser from '../../../interfaces/IUser';

export function signInRequest(
  username: string,
): { type: string; payload: { username: string } } {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username },
  };
}

export function signInSuccess(
  user: IUser,
): { type: string; payload: { user: IUser } } {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { user },
  };
}

export function deleteUser(
  id: number,
): { type: string; payload: { id: number } } {
  return {
    type: '@auth/DELETE_USER',
    payload: { id },
  };
}

export function signFailure(): { type: string } {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
