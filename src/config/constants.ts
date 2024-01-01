// Types
import { User } from '../types/entities';
import { ENV } from '../types/enums';

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

export const DONATIONS_LEVELS: Record<User['gender'], number[]> = {
  M: [10, 20, 30, 45, 70, 100, 130, 150, 200, 300, 400],
  F: [10, 15, 25, 35, 50, 70, 100, 130, 150, 200, 300, 400],
};

export const SA_DONATION_INTERVAL = 90;
export const PL_DONATION_INTERVAL = 45;
export const PI_DONATION_INTERVAL = SA_DONATION_INTERVAL;
