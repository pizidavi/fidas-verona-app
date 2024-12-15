// Store
import { useAuthStore } from '../store';

// Api
import { getUser } from '../api/AuthManager';

// Utils
import { appLog } from '../utils/logger';

// Types
import { NOTIFICATION_CHANNEL } from '../types/enums';

// Others
import notifee from '@notifee/react-native';
import { BackgroundFetchResult } from 'expo-background-fetch';
import { t } from 'i18next';

export const userBackgroundTask = async () => {
  try {
    const user = useAuthStore.getState().user;
    if (!user) throw new Error('User not found');

    const response = await getUser();

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

    return BackgroundFetchResult.NewData;
  } catch (error) {
    appLog.error('Background task error', error);
    return BackgroundFetchResult.Failed;
  }
};
