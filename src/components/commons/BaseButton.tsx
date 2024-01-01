// React
import { useMemo } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';

// Components
import LocaleText from './LocaleText';

// Utils
import { clx } from '../../utils/utils';

// Others
import colors from '../../../colors';

type BaseButtonProps = {
  /** Text */
  text: string;
  /** Type */
  theme?: 'primary' | 'outline';
  /** Loading */
  loading?: boolean;
  /** Disabled */
  disabled?: boolean;
  /** Icon */
  icon?: (props: any) => JSX.Element;
  /** On press callback */
  onPress?: () => void;
};

/**
 * Button component
 * @param props
 */
function BaseButton(props: BaseButtonProps) {
  const { theme = 'primary' } = props;

  // Memos
  const mainClassName = useMemo(() => {
    const base = clx(
      'min-h-11 flex-row items-center justify-between gap-2 rounded px-5',
      props.disabled ? 'opacity-80' : '',
    );
    switch (theme) {
      case 'primary':
        return clx(base, 'bg-primary-500');
      case 'outline':
        return clx(base, 'bg-white-500 border border-primary-500');
    }
    theme satisfies never;
  }, [theme, props.disabled]);

  const textClassName = useMemo(() => {
    const base = 'text-center font-semibold';
    switch (theme) {
      case 'primary':
        return clx(base, 'text-white');
      case 'outline':
        return clx(base, 'text-primary-500');
    }
    theme satisfies never;
  }, [theme]);

  const iconColor = useMemo(() => {
    switch (theme) {
      case 'primary':
        return colors.dark[500];
      case 'outline':
        return colors.primary[500];
    }
    theme satisfies never;
  }, [theme]);

  // Render
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      className='flex'
      disabled={props.loading || props.disabled}
    >
      <View className={mainClassName}>
        <View className='w-6 justify-center'>
          {props.icon && <props.icon size={25} color={iconColor} />}
        </View>
        <LocaleText text={props.text} className={textClassName} />
        <View className='w-6 justify-center'>
          {props.loading && <ActivityIndicator size={25} color={iconColor} />}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default BaseButton;
