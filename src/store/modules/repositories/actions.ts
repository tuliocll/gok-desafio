/* eslint-disable camelcase */
import IRepository from '../../../interfaces/IRepository';

export function fetchRepositories(
  username: string,
): { type: string; payload: { username: string } } {
  return {
    type: '@repositories/FETCH_REQUEST',
    payload: { username },
  };
}

export function fetchTagsRequest(
  username: string,
  repository: string,
): { type: string; payload: { username: string; repository: string } } {
  return {
    type: '@repositories/FETCH_TAGS_REQUEST',
    payload: { username, repository },
  };
}

export function fetchSuccess(
  repositories: Array<IRepository>,
  username: string,
): {
  type: string;
  payload: { repositories: Array<IRepository>; username: string };
} {
  return {
    type: '@repositories/FETCH_SUCCESS',
    payload: { repositories, username },
  };
}

interface FetchTagProps {
  username: string;
  repository: string;
  tags: Record<string, string | number>;
}

export function fetchTagSuccess(
  tags: FetchTagProps,
): { type: string; payload: { tags: FetchTagProps } } {
  return {
    type: '@repositories/FETCH_TAGS_SUCCESS',
    payload: { tags },
  };
}

export function addTagToRepository(
  tag: string,
  repository: string,
  username: string,
): {
  type: string;
  payload: { tag: string; repository: string; username: string };
} {
  return {
    type: '@repositories/TAGS_ADD',
    payload: { tag, repository, username },
  };
}

export function removeTagFromRepository(
  tag: string,
  repository: string,
  username: string,
): {
  type: string;
  payload: { tag: string; repository: string; username: string };
} {
  return {
    type: '@repositories/TAGS_REMOVE',
    payload: { tag, repository, username },
  };
}

export function fetchFailure(): { type: string } {
  return {
    type: '@repositories/FETCH_FAILURE',
  };
}
