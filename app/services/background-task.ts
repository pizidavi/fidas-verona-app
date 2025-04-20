// Store
import { useAuthStore } from '../store';
import { getUnsafeLocalAuth, LocalStorage } from '../store/local';

// Api
import { postLogin } from '../api/AuthManager';

// Utils
import { appLog } from '../utils/logger';

// Types
import { NOTIFICATION_CHANNEL, STORAGE_KEY } from '../types/enums';

// Others
import notifee from '@notifee/react-native';
import { BackgroundFetchResult } from 'expo-background-fetch';
import { t } from 'i18next';

export const userBackgroundTask = async () => {
  try {
    const auth = await getUnsafeLocalAuth();
    if (!auth) throw new Error('Auth not found');
    const user = useAuthStore.getState().user;
    if (!user) throw new Error('User not found');

    const response = await postLogin(auth);

    if (user?.donations_count !== response.donations_count) {
      await notifee.displayNotification({
        title: t('messages:newDonation'),
        body: t('messages:addedDonationToAccount'),
        android: {
          channelId: NOTIFICATION_CHANNEL.ADDED_DONATION,
          pressAction: {
            id: 'default',
          },
        },
      });
    }

    LocalStorage.setItem(STORAGE_KEY.LAST_BACKGROUND_TASK_REFRESH_USER, new Date().toISOString());

    return BackgroundFetchResult.NewData;
  } catch (error) {
    appLog.error('Background task error', error);
    return BackgroundFetchResult.Failed;
  }
};
