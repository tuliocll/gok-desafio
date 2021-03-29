import { store } from '../store';

const defaultOptions = {
  headers: {
    Authorization: 'token a6d9f8c56044d45875ae3767c557c87a7c1e28bb',
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
