// Assets
import { SvgProps } from 'react-native-svg';

export type UrlParam = {
  key: string;
  value: string | number;
};

export type HeroIcon = SvgProps & { size?: number };

export type Achievement = {
  label: string;
  value: number;
};
