/* eslint-disable camelcase */
import IRepository from './IRepository';

export default interface IUser {
  login: string;
  id: number;
  name: string;
  avatar_url: string;
  url: string;
  company: string;
  location: string;
  stars: number;
  message: string;
  followers: number;
  repostiorys: Array<IRepository>;
}
