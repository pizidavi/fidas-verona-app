// React
import { useCallback, useMemo } from 'react';
import { Text, type TextProps } from 'react-native';

// Utils
import { clx } from '../../utils/utils';

// Others
import { type Dictionary } from '../../locales';
import { Trans, useTranslation } from 'react-i18next';

export type LocaleTextProps<T extends boolean = false> = {
  /** Text */
  text: T extends false ? Dictionary : string | number;
  /** Avoid translation */
  avoidTranslation?: T;
  /** Values */
  values?: Record<string, Dictionary | (string & {}) | number>;
  /** Components */
  components?: readonly React.ReactElement[] | Record<string, React.ReactElement>;
} & Omit<TextProps, 'children'>;

/**
 * LocaleText component
 * @param props
 */
function LocaleText<T extends boolean = false>(props: LocaleTextProps<T>) {
  const { text, avoidTranslation, className, values, components, ...rest } = props;

  // Hooks
  const { t } = useTranslation();

  // Memos
  const translatedValues = useMemo(() => {
    if (!values) return undefined;
    return Object.entries(values).reduce<typeof values>((acc, [key, value]) => {
      acc[key] = typeof value === 'string' ? t(value) : value;
      return acc;
    }, {});
  }, [t, values]);

  // Callbacks
  const BaseText = useCallback(
    (props: { children: React.ReactNode }) => (
      <Text className={clx('text-md text-contrast font-medium', className)} {...rest} {...props} />
    ),
    [className, rest],
  );

  // Render
  return avoidTranslation ? (
    <BaseText>{text}</BaseText>
  ) : (
    <Trans
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      i18nKey={text.toString() as any}
      values={translatedValues}
      components={components}
      parent={BaseText}
    />
  );
}
export default LocaleText;
