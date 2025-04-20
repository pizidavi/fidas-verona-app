// Config
import {
  PI_DONATION_INTERVAL,
  PL_DONATION_INTERVAL,
  SA_DONATION_INTERVAL,
} from '../config/constants';

// Types
import type { Donation, User } from '../types/entities';

// Others
import { type ClassNameValue, twMerge } from 'tailwind-merge';

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
  [...Array<undefined>(length)].map(() => Math.random().toString(36)[2]).join('');

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

/**
 * Get next donation date
 * @param lastDonation Last donation
 */
export const getNextDonationDate = (donations: Donation[], gender: User['gender']) => {
  const lastDonation = {
    date: new Date(donations[0].date),
    type: donations[0].type,
  };

  const nextSADonationDate = new Date(lastDonation.date);
  const nextPLDonationDate = new Date(lastDonation.date);
  const nextPIDonationDate = new Date(lastDonation.date);

  if (lastDonation.type === 'SA') {
    nextSADonationDate.setDate(lastDonation.date.getDate() + SA_DONATION_INTERVAL[gender]);
    nextPLDonationDate.setDate(lastDonation.date.getDate() + PL_DONATION_INTERVAL[gender]);
    nextPIDonationDate.setDate(lastDonation.date.getDate() + PI_DONATION_INTERVAL[gender]);

    return {
      nextSADonationDate,
      nextPLDonationDate,
      nextPIDonationDate,
    };
  } else {
    const lastSADonation = donations.find(donation => donation.type === 'SA');
    const lastSADonationDate = new Date(lastSADonation?.date ?? 0);

    nextSADonationDate.setDate(
      Math.min(
        lastDonation.date.getDate() + PL_DONATION_INTERVAL[gender],
        lastSADonationDate.getDate() + SA_DONATION_INTERVAL[gender],
      ),
    );
    nextPLDonationDate.setDate(lastDonation.date.getDate() + SA_DONATION_INTERVAL.M);
    nextPIDonationDate.setDate(lastDonation.date.getDate() + SA_DONATION_INTERVAL.M);

    return {
      nextSADonationDate,
      nextPLDonationDate,
      nextPIDonationDate,
    };
  }
};
