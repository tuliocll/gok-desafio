import IUser from './IUser';
import IRepository from './IRepository';

interface FetchTagProps {
  username: string;
  repository: string;
  tags: Record<string, string>;
}

export interface RootState {
  signin: { users: Array<IUser>; loading: boolean };
  repositories: {
    repositories: [
      {
        username: string;
        data: Array<IRepository>;
      },
    ];
    loading: boolean;
    tags: FetchTagProps;
  };
}
