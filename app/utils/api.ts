// Types
import type { UrlParam } from '../types/structs';

// Others
import axios, { type AxiosError } from 'axios';
import Crypto from 'react-native-quick-crypto';

export const parseUrl = (url: string, params: UrlParam[] = []) => {
  let parsedUrl = url;
  const queryParams: UrlParam[] = [];

  params.forEach(p => {
    if (parsedUrl.includes(`:${p.key}`))
      parsedUrl = parsedUrl.replace(`:${p.key}`, String(p.value));
    else queryParams.push(p);
  });

  queryParams.forEach((q, i) => {
    parsedUrl += i === 0 ? '?' : '&';
    parsedUrl += `${q.key}=${q.value}`;
  });

  return parsedUrl;
};

export const generateHash = (text: string) => {
  const hash = Crypto.createHash('sha256');
  hash.update(text);
  return hash.digest('hex');
};

export const handleStandardError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const e = error as AxiosError<{ code: number; message: string }>;
    return { axiosError: e };
  }
  return { error };
};
