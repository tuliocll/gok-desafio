import { store } from '../store';

const defaultOptions = {
  headers: {
    // Authorization: 'token ', ative caso tenha timeout (gere um token no github)
  },
};

const BASE_URL = 'https://api.github.com';

async function api(
  path: string,
  method: string,
): Promise<Array<Record<string, string>>> {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...defaultOptions,
    method,
  });

  const data = await response.json();

  return data;
}

export default api;
