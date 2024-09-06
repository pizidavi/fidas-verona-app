// React
import { useCallback, useMemo } from 'react';
import { Text, TextProps } from 'react-native';

// Utils
import { clx } from '../../utils/utils';

// Others
import { Trans, useTranslation } from 'react-i18next';

export type LocaleTextProps = {
  /** Text */
  text: string | number;
  /** Avoid translation */
  avoidTranslation?: boolean;
  /** Class Name */
  className?: string;
  /** Values */
  values?: Record<string | number, string | number>;
  /** Components */
  components?: readonly React.ReactElement[] | { readonly [tagName: string]: React.ReactElement };
} & Omit<TextProps, 'children'>;

/**
 * LocaleText component
 * @param props
 */
function LocaleText(props: LocaleTextProps) {
  const { text, avoidTranslation, className, values, components, ...rest } = props;

  // Hooks
  const { t } = useTranslation();

  // Memos
  const translatedValues = useMemo(() => {
    if (!values) return undefined;
    return Object.entries(values).reduce(
      (acc, [key, value]) => {
        acc[key] = typeof value === 'string' ? t(value) : value;
        return acc;
      },
      {} as typeof values,
    );
  }, [values]);

  // Callbacks
  const BaseText = useCallback(
    (props: { children: React.ReactNode }) => (
      <Text className={clx('text-md text-contrast font-medium', className)} {...rest} {...props} />
    ),
    [className],
  );

  // Render
  return avoidTranslation ? (
    <BaseText>{text}</BaseText>
  ) : (
    <Trans
      i18nKey={text.toString()}
      values={translatedValues}
      components={components}
      parent={BaseText}
    />
  );
}
export default LocaleText;
