// Config
import { LEGACY_API_URL, API_URL } from '../config/constants';

// Utils
import { apiLog } from '../utils/logger';

// Types
import { SECURE_STORAGE_KEY } from '../types/enums';

// Others
import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import * as SecureStore from 'expo-secure-store';

const legacyUnauthAxios = axios.create({
  baseURL: `${LEGACY_API_URL}/companyrests`,
});

const unauthAxios = axios.create({
  baseURL: API_URL,
});

const authAxios = axios.create({
  baseURL: API_URL,
});

const requestInterceptor = (request: InternalAxiosRequestConfig) => {
  apiLog.debug(`Called ${request.baseURL} ${request.url}`);
  return request;
};

const appendAccessHeaderInterceptor = (request: InternalAxiosRequestConfig) => {
  const token = SecureStore.getItem(SECURE_STORAGE_KEY.TOKEN);
  if (token) request.headers.Authorization = token;
  request.headers['x-device-id'] = 'fidas-app';
  return request;
};

const responseInterceptor = (response: AxiosResponse) => {
  const data = response.data as { code: number; message: string } | undefined;
  if (!data?.code || data.code !== 200)
    throw new AxiosError(
      data?.message ?? 'Error',
      data?.code.toString(),
      response.config,
      response.request,
      response,
    );
  return response;
};

const errorLoggerInterceptor = (error: AxiosError) => {
  apiLog.warn(`Error on ${error.config?.url}: ${JSON.stringify(error.response?.data)}`);
  throw error;
};

legacyUnauthAxios.interceptors.request.use(requestInterceptor);
legacyUnauthAxios.interceptors.response.use(_ => _, errorLoggerInterceptor);

unauthAxios.interceptors.request.use(requestInterceptor);
unauthAxios.interceptors.response.use(responseInterceptor, errorLoggerInterceptor);

authAxios.interceptors.request.use(requestInterceptor);
authAxios.interceptors.request.use(appendAccessHeaderInterceptor);
authAxios.interceptors.response.use(responseInterceptor, errorLoggerInterceptor);

export { legacyUnauthAxios, unauthAxios, authAxios };
