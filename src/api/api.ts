import axios, {
  AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig,
} from 'axios';
import history from 'history/history';

const BASE_URL = 'http://localhost:3001/';
const REQUEST_TIMEOUT = 5000;
const NOT_FOUND_STATUS = 404;
const ERROR_URL = '/error';

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError) => {
      if (error.response?.status === NOT_FOUND_STATUS) {
        history.replace(ERROR_URL);
      }
      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => config,
  );

  return api;
};

const api = createApi();

export { api };
export default createApi;
