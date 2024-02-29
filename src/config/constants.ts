// Types
import { User } from '../types/entities';
import { ACHIEVEMENT, ENV } from '../types/enums';

// Others
import Config from 'react-native-config';
import { version } from '../../package.json';

// Check if all env variables required are set
Object.values(ENV).forEach(e => {
  if (!Config[e]) throw new Error(`Initialization error. Env is missing "${e}" variable`);
});

export const API_URL = Config.API_URL!;
export const COMPANY_ID = Config.COMPANY_ID!;
export const FORGOT_PASSWORD_URL = Config.FORGOT_PASSWORD_URL!;
export const REPOSITORY_URL = Config.REPOSITORY_URL!;
export const DEV_USERNAME = Config.DEV_USER ?? '';
export const DEV_PASSWORD = Config.DEV_PASSWORD ?? '';

export const APP_VERSION = version;

export const AUTHORIZATION_HEADER = 'WSSE profile="UsernameToken"';
export const X_WSSE_HEADER_KEY = 'X-WSSE';

export const DONATIONS_ACHIEVEMENTS: Record<ACHIEVEMENT, Record<User['gender'], number>> = {
  [ACHIEVEMENT.CERTIFICATE_OF_MERIT]: { M: 10, F: 10 },
  [ACHIEVEMENT.BRONZE_DROP]: { M: 20, F: 15 },
  [ACHIEVEMENT.SILVERED_DROP]: { M: 30, F: 25 },
  [ACHIEVEMENT.GOLDEN_DROP]: { M: 45, F: 35 },
  [ACHIEVEMENT.CROSS_OF_MERIT]: { M: 70, F: 50 },
  [ACHIEVEMENT.BADGE_OF_MERIT]: { M: 100, F: 70 },
  [ACHIEVEMENT.STAR_OF_MERIT]: { M: 130, F: 100 },
  [ACHIEVEMENT.KING_OF_DONATIONS]: { M: 200, F: 150 },
  [ACHIEVEMENT.GOD_OF_DONATIONS]: { M: 300, F: 200 },
} as const;

export const SA_DONATION_INTERVAL = { M: 90, F: 180 } as const;
export const PL_DONATION_INTERVAL = { M: 45, F: 45 } as const;
export const PI_DONATION_INTERVAL = { M: 90, F: 90 } as const;
