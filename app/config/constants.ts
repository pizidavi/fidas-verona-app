// Types
import { User } from '../types/entities';
import { ACHIEVEMENT, ENV } from '../types/enums';

// Others
import { expo } from '../../app.json';

// eslint-disable-next-line no-var
declare var process: {
  env: Record<ENV, string | undefined>;
};

export const API_URL = process.env.EXPO_PUBLIC_API_URL!;
export const COMPANY_ID = process.env.EXPO_PUBLIC_COMPANY_ID!;
export const FORGOT_PASSWORD_URL = process.env.EXPO_PUBLIC_FORGOT_PASSWORD_URL!;
export const REPOSITORY_URL = process.env.EXPO_PUBLIC_REPOSITORY_URL!;
export const DEV_USERNAME = process.env.EXPO_PUBLIC_DEV_USER;
export const DEV_PASSWORD = process.env.EXPO_PUBLIC_DEV_PASSWORD;

export const APP_VERSION = expo.version;

export const AUTHORIZATION_HEADER = 'WSSE profile="UsernameToken"';
export const X_WSSE_HEADER_KEY = 'X-WSSE';

export const DONATIONS_ACHIEVEMENTS: Record<
  ACHIEVEMENT,
  {
    interval: Record<User['gender'], number>;
    hidden?: boolean | undefined;
  }
> = {
  [ACHIEVEMENT.CERTIFICATE_OF_MERIT]: {
    interval: { M: 10, F: 10 },
  },
  [ACHIEVEMENT.BRONZE_DROP]: {
    interval: { M: 20, F: 15 },
  },
  [ACHIEVEMENT.SILVERED_DROP]: {
    interval: { M: 30, F: 25 },
  },
  [ACHIEVEMENT.GOLDEN_DROP]: {
    interval: { M: 45, F: 35 },
  },
  [ACHIEVEMENT.CROSS_OF_MERIT]: {
    interval: { M: 70, F: 50 },
  },
  [ACHIEVEMENT.BADGE_OF_MERIT]: {
    interval: { M: 100, F: 70 },
  },
  [ACHIEVEMENT.STAR_OF_MERIT]: {
    interval: { M: 130, F: 100 },
  },
  [ACHIEVEMENT.KING_OF_DONATIONS]: {
    interval: { M: 200, F: 150 },
    hidden: true,
  },
  [ACHIEVEMENT.GOD_OF_DONATIONS]: {
    interval: { M: 300, F: 200 },
    hidden: true,
  },
};

export const SA_DONATION_INTERVAL = { M: 90, F: 180 } as const;
export const PL_DONATION_INTERVAL = { M: 45, F: 45 } as const;
export const PI_DONATION_INTERVAL = PL_DONATION_INTERVAL;
