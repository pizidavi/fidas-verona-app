// React
import { useMemo } from 'react';
import { Text, TextProps } from 'react-native';

// Utils
import { clx } from '../../utils/utils';

// Others
import { useTranslation } from 'react-i18next';

export type LocaleTextProps = {
  /** Text key */
  text: string | number | (string | number)[];
  /** Avoid translation */
  avoidTranslation?: boolean;
} & Omit<TextProps, 'children'>;

/**
 * LocaleText component
 * @param props
 */
function LocaleText(props: LocaleTextProps) {
  const { text, avoidTranslation, className, ...rest } = props;

  // Hooks
  const { t: traslate, i18n } = useTranslation();

  // Memos
  const translatedText = useMemo(() => {
    if (avoidTranslation) return Array.isArray(text) ? text.join(' ') : String(text);
    if (Array.isArray(text)) {
      return text
        .map(t => String(t))
        .map(t => traslate(t))
        .filter(Boolean)
        .join(' ');
    }
    return traslate(String(text));
  }, [i18n.language, text, avoidTranslation]);

  // Render
  return (
    <Text className={clx('text-base text-dark-500', className)} {...rest}>
      {translatedText}
    </Text>
  );
}

export default LocaleText;
