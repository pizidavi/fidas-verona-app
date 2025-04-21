// Types
import type { UrlParam } from '../types/structs';
import { AppError } from '../types/errors';

// Others
import axios, { type AxiosError } from 'axios';
import * as Crypto from 'expo-crypto';

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

export const generateHash = async (data: string) => {
  return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, data);
};

export const handleStandardError = <T = unknown>(error: T) => {
  if (axios.isAxiosError(error)) {
    const e = error as AxiosError<{ code: number; message: string }>;
    return { axiosError: e };
  } else if (error instanceof AppError) {
    return { error: error as AppError };
  }
  return { unknownError: error };
};
