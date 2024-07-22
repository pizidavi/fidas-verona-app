// Redux
import { getLocalAuth } from '../store/local';

// Config
import { API_URL, AUTHORIZATION_HEADER, X_WSSE_HEADER_KEY } from '../config/constants';

// Utils
import { generateXWsseHeader } from '../utils/api';
import { apiLog } from '../utils/logger';

// Others
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const unauthAxios = axios.create({
  baseURL: `${API_URL}/companyrests`,
});

const secureAxios = axios.create({
  baseURL: `${API_URL}/secureapi`,
});

const requestInterceptor = (request: InternalAxiosRequestConfig) => {
  apiLog.debug(`Called ${request.baseURL} ${request.url}`);
  return request;
};

const appendAccessHeaderInterceptor = async (request: InternalAxiosRequestConfig) => {
  if (request.headers && !request.headers.Authorization && !request.headers[X_WSSE_HEADER_KEY]) {
    const user = await getLocalAuth();

    request.headers.Authorization = AUTHORIZATION_HEADER;
    request.headers[X_WSSE_HEADER_KEY] = generateXWsseHeader(user.username, user.passwordSalt);
  }
  return request;
};

const responseInterceptor = (response: AxiosResponse<any>) => response;

const errorLoggerInterceptor = (error: AxiosError<any>) => {
  apiLog.warn(`Error on ${error.config?.url}: ${JSON.stringify(error.response?.data)}`);
  throw error;
};

unauthAxios.interceptors.request.use(requestInterceptor);
unauthAxios.interceptors.response.use(responseInterceptor, errorLoggerInterceptor);

secureAxios.interceptors.request.use(requestInterceptor);
secureAxios.interceptors.request.use(appendAccessHeaderInterceptor);
secureAxios.interceptors.response.use(responseInterceptor, errorLoggerInterceptor);

export { unauthAxios, secureAxios };

export default unauthAxios;
