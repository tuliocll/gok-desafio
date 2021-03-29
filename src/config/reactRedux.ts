/* eslint-disable @typescript-eslint/no-empty-interface */
import { RootState } from '../interfaces/IState';

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}
