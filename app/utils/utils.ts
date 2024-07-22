// Others
import { ClassNameValue, twMerge } from 'tailwind-merge';

/**
 * Sleep
 * @param ms Time to sleep in milliseconds
 */
export const sleep = (ms = 1000) => new Promise<void>(resolve => setTimeout(resolve, ms));

/**
 * Tailwind classnames merger
 * @param classNames Classnames
 * @return Merged classnames
 */
export const clx = (...classNames: ClassNameValue[]) => twMerge(...classNames);

/**
 * Generate random nonce
 * @param length Length
 * @return Nonce
 */
export const generateNonce = (length = 10) =>
  [...Array(length)].map(() => Math.random().toString(36)[2]).join('');

/**
 * Generate timestamp
 * @return Timestamp YYYY-MM-DDTHH:mm:ssZ
 */
export const generateTimestamp = () => new Date().toISOString().replace(/\..+/, '') + 'Z';

/**
 * Convert version string to number
 * @param version Version string
 * @return Version number
 */
export const versionToNumber = (version: string) =>
  parseInt(
    version
      .split('')
      .filter(c => '0123456789'.includes(c))
      .join('') || '0',
  );
