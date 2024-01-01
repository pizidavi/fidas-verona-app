// Types
import { User } from './entities';

export type ConfigStore = Record<string, never>;

export type AuthStore = {
  user?: User | null;
};
