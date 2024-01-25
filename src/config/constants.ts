// Types
import { User } from '../types/entities';
import { ACHIEVEMENT, ENV } from '../types/enums';

// Others
import Config from 'react-native-config';

// Check if all env variables required are set
Object.values(ENV).forEach(e => {
  if (!Config[e]) throw new Error(`Initialization error. Env is missing "${e}" variable`);
});

export const API_URL = Config.API_URL!;
export const COMPANY_ID = Config.COMPANY_ID!;
export const DEV_USERNAME = Config.DEV_USER ?? '';
export const DEV_PASSWORD = Config.DEV_PASSWORD ?? '';

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
};

export const SA_DONATION_INTERVAL = 90;
export const PL_DONATION_INTERVAL = 45;
export const PI_DONATION_INTERVAL = SA_DONATION_INTERVAL;
