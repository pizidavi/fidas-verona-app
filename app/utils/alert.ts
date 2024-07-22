// React
import { Alert } from 'react-native';

// Others
import { t } from 'i18next';

export const showAlert = (
  title: string,
  body: string | string[],
  buttons?: {
    text: string;
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
        onPress: () => {
          b.onPress && b.onPress();
        },
      })),
  );
};
