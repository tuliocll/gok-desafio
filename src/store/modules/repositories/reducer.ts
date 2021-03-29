/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import produce from 'immer';

import IRepository from '../../../interfaces/IRepository';

interface FetchTagProps {
  username: string;
  repository: string;
  tags: Record<string, string>;
}

const INITIAL_STATE: {
  repositories: [
    {
      username: string;
      data: Array<IRepository>;
    },
  ];
  loading: boolean;
  username: string;
  tags: FetchTagProps;
} = {
  repositories: [
    {
      username: '',
      data: [],
    },
  ],
  loading: false,
  username: '',
  tags: {
    username: '',
    repository: '',
    tags: {},
  },
};

interface Action {
  type: string;
  payload: {
    repositories: Array<IRepository>;
    tags: FetchTagProps;
    id: number;
    tag: string;
    repository: string;
    username: string;
  };
}

export default function repositories(state = INITIAL_STATE, action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@repositories/FETCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@repositories/FETCH_SUCCESS': {
        const userRepos = draft.repositories.find(
          repo => repo.username === action.payload.username,
        );
        const userReposIndex = draft.repositories.findIndex(
          repo => repo.username === action.payload.username,
        );

        if (!userRepos) {
          draft.repositories.push({
            username: action.payload.username,
            data: action.payload.repositories,
          });
          return;
        }

        const newRepos = action.payload.repositories.filter(
          incoming => !userRepos.data.some(actual => actual.id === incoming.id),
        );

        newRepos.forEach(newRepo =>
          draft.repositories[userReposIndex].data.push(newRepo),
        );

        const updateRepo = userRepos.data.map(repo => {
          const update = action.payload.repositories.filter(
            up => up.id === repo.id,
          );

          return {
            ...update[0],
            tags: repo.tags || [],
          };
        });

        draft.repositories[userReposIndex].data = updateRepo;
        draft.loading = false;
        break;
      }
      case '@repositories/FETCH_TAGS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@repositories/FETCH_TAGS_SUCCESS': {
        draft.tags = action.payload.tags;
        draft.loading = false;
        break;
      }
      case '@repositories/FETCH_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@repositories/TAGS_ADD': {
        const userRepos = draft.repositories.find(
          repo => repo.username === action.payload.username,
        );
        const userReposIndex = draft.repositories.findIndex(
          repo => repo.username === action.payload.username,
        );
        console.log(userRepos, 'oi', action.payload.username);
        if (!userRepos) {
          return;
        }

        const updatedRepo = userRepos.data.map(repo => {
          if (repo.name === action.payload.repository) {
            const newTags = Array.from(
              new Set(
                repo.tags
                  ? [...repo.tags, action.payload.tag]
                  : [action.payload.tag],
              ),
            );
            return {
              ...repo,
              tags: newTags,
            };
          }
          return repo;
        });

        draft.repositories[userReposIndex].data = updatedRepo;
        break;
      }
      case '@repositories/TAGS_REMOVE': {
        const userRepos = draft.repositories.find(
          repo => repo.username === action.payload.username,
        );

        const userReposIndex = draft.repositories.findIndex(
          repo => repo.username === action.payload.username,
        );

        if (!userRepos) {
          return;
        }

        const updatedRepo = userRepos.data.map(repo => {
          if (repo.name === action.payload.repository) {
            return {
              ...repo,
              tags: repo.tags.filter(tag => tag !== action.payload.tag),
            };
          }
          return repo;
        });

        draft.repositories[userReposIndex].data = updatedRepo;
        break;
      }
      default:
        return state;
    }
  });
}
