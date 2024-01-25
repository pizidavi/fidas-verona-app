// React
import { useMemo } from 'react';
import { View } from 'react-native';

// Components
import LocaleText from './LocaleText';

// Utils
import { clx } from '../../utils/utils';

export enum BADGE_THEME {
  SA,
  PL,
  PI,
}

type BadgeProps = {
  theme: BADGE_THEME;
  full?: boolean;
  className?: string;
};

/**
 * Badge component
 * @param props
 */
function Badge(props: BadgeProps) {
  const { theme, full, className } = props;

  // Memos
  const viewClassName = useMemo(() => {
    const base = 'rounded-xl px-3';
    switch (theme) {
      case BADGE_THEME.SA:
        return clx(base, 'bg-primary-500', className);
      case BADGE_THEME.PL:
        return clx(base, 'bg-pl-500', className);
      case BADGE_THEME.PI:
        return clx(base, 'bg-pi-500', className);
    }
    theme satisfies never;
  }, [theme, className]);

  const textClassName = useMemo(() => {
    const base = 'text-center';
    switch (theme) {
      case BADGE_THEME.SA:
        return clx(base, 'text-primary-100');
      case BADGE_THEME.PL:
        return clx(base, 'text-pl-700');
      case BADGE_THEME.PI:
        return clx(base, 'text-pi-700');
    }
    theme satisfies never;
  }, [theme]);

  const text = useMemo(() => {
    switch (theme) {
      case BADGE_THEME.SA:
        return full ? 'general:blood' : 'general:sa';
      case BADGE_THEME.PL:
        return full ? 'general:plasma' : 'general:pl';
      case BADGE_THEME.PI:
        return full ? 'general:platelet' : 'general:pi';
    }
    theme satisfies never;
  }, [theme, full]);

  // Render
  return (
    <View className={viewClassName}>
      <LocaleText text={text} className={textClassName} />
    </View>
  );
}

export default Badge;
