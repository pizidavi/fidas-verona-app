// Assets
import type { SvgProps } from 'react-native-svg';

// Others
import type { Dictionary } from '../locales';

export type UrlParam = {
  key: string;
  value: string | number;
};

export type HeroIcon = SvgProps & { size?: number };

export type Achievement = {
  label: Dictionary;
  value: number;
};
