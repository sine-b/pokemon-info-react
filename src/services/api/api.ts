import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const api = (() => {
  const post = (url: string, data: any, config: any) =>
    baseAxios.post(url, data, config);
  const get = (url: string, config?: any) => baseAxios.get(url, config);

  return { post, get };
})();

export default api;
