// React
import { Alert } from 'react-native';

// Others
import type { Dictionary } from '../locales';
import { t } from 'i18next';

export const showAlert = (
  title: Dictionary,
  body: Dictionary | Dictionary[],
  buttons?: {
    text: Dictionary;
    onPress?: () => void;
    style?: 'default' | 'cancel' | 'destructive';
    disabled?: boolean;
  }[],
) => {
  Alert.alert(
    t(title),
    Array.isArray(body) ? body.map(b => t(b)).join('\n') : t(body) || body,
    buttons
      ?.filter(b => !b.disabled)
      .map(b => ({
        text: t(b.text) || b.text,
        style: b.style,
        onPress: b.onPress,
      })),
  );
};
