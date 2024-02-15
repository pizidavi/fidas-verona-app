// Types
import { Company, User } from './entities';

export type ConfigStore = {
  company?: Company;
  favoriteDonationsCenterIds: number[];
};

export type AuthStore = {
  user?: User | null;
};
