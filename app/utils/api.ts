// Config
import { COMPANY_ID } from '../config/constants';

// Utils
import { generateNonce, generateTimestamp } from './utils';

// Types
import type { UrlParam } from '../types/structs';

// Others
import axios, { type AxiosError } from 'axios';
import Crypto from 'react-native-quick-crypto';
import { Buffer } from '@craftzdog/react-native-buffer';

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

export const generateXWsseHeader = (username: string, saltedPassword: string) => {
  const { digest, nonce, createdAt } = generateDigest(saltedPassword);

  return `UsernameToken Username="${username}", PasswordDigest="${digest}", Nonce="${nonce}", Created="${createdAt}", Companyid="${COMPANY_ID}"`;
};

export const generateDigest = (saltedPassword: string) => {
  const nonce = generateNonce();
  const createdAt = generateTimestamp();
  const toBeDigested = nonce + createdAt + saltedPassword;
  const bytes = Array.from(toBeDigested, char => char.charCodeAt(0));

  const instance = Crypto.createHash('SHA1');
  //@ts-expect-error Buffer as ArrayBuffer
  instance.update(Buffer.from(bytes));

  return {
    digest: Buffer.from(instance.digest()).toString('base64'),
    nonce: Buffer.from(nonce).toString('base64'),
    createdAt,
  };
};

export const generateSaltedPassword = (password: string, salt: string) => {
  const string = password + '{' + salt + '}';

  const digest1 = Crypto.createHash('sha512').update(string).digest();

  const bArr = new Uint8Array(digest1.length + Buffer.byteLength(string));
  bArr.set(digest1);
  bArr.set(
    Array.from(string, char => char.charCodeAt(0)),
    digest1.length,
  );

  const digest2 = Crypto.createHash('sha512')
    //@ts-expect-error Buffer as ArrayBuffer
    .update(bArr)
    .digest();
  return Buffer.from(digest2).toString('base64');
};

export const handleStandardError = (error: Error) => {
  if (axios.isAxiosError(error)) {
    const e = error as AxiosError;
    return { axiosError: e };
  }
  return { error };
};
