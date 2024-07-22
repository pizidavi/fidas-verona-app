// React
import { ComponentType, useCallback, useMemo, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

// Components
import LocaleText, { LocaleTextProps } from './LocaleText';

// Utils
import { clx } from '../../utils/utils';

// Assets
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

// Others
import colors from '../../../colors';
import { useTranslation } from 'react-i18next';

export type BaseInputProps = {
  /** Top title */
  title?: LocaleTextProps['text'];
  /** Description */
  description?: LocaleTextProps['text'];
  /** Icon */
  icon?: (props: any) => JSX.Element;
  /** Custom component type */
  as?: ComponentType<TextInputProps>;
  /** Validator | Not working with defaultValue */
  validator?: (value: string) => string | undefined;
} & TextInputProps;

/**
 * Input component
 * @param props
 */
function BaseInput(props: BaseInputProps) {
  const {
    title,
    description,
    as: Input = TextInput,
    placeholder,
    className,
    secureTextEntry,
    value,
    validator,
    ...rest
  } = props;

  // Hooks
  const { t } = useTranslation();

  // State
  const [isSecureText, setIsSecureText] = useState(secureTextEntry);
  const [touched, setTouched] = useState<boolean>(false);

  // Memos
  const inputPlaceholder = useMemo(() => {
    if (!placeholder) return;
    return t(placeholder);
  }, [placeholder]);

  const error = useMemo(() => {
    if (!validator || value === undefined || !touched) return undefined;
    return validator(value ?? '');
  }, [validator, value, touched]);

  const SecureTextIcon = useMemo(() => (isSecureText ? EyeOffIcon : EyeIcon), [isSecureText]);

  // Callbacks
  const handleIconPress = useCallback(() => {
    setIsSecureText(prev => !prev);
  }, []);

  // Render
  return (
    <View className='gap-1'>
      {title && <LocaleText text={title} className='font-semibold text-dark-500' />}
      <View className={clx('flex-row items-center rounded border px-2', className)}>
        {props.icon && <props.icon size={20} color={colors.dark[300]} className='m-1' />}
        <Input
          className='flex-1 py-1 text-dark-500'
          placeholder={inputPlaceholder}
          secureTextEntry={isSecureText}
          value={value}
          onBlur={() => setTouched(true)}
          {...rest}
        />
        {isSecureText !== undefined && (
          <SecureTextIcon color={colors.dark[300]} onPress={handleIconPress} className='ml-1' />
        )}
      </View>
      {error && <LocaleText text={error} className='px-1 text-red-500' />}
      {description && <LocaleText text={description} className='text-dark-300' />}
    </View>
  );
}

export default BaseInput;
