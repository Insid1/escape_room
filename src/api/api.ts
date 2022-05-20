import axios, {
  AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig,
} from 'axios';

const BASE_URL = 'http://localhost:3001/';
const REQUEST_TIMEOUT = 5000;
// UnAuthorization function is implemented to work with authorization

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError) => Promise.reject(error),
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => config,
  );

  return api;
};

const api = createApi();

export { api };
export default createApi;
