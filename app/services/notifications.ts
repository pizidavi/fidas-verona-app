// Config
import { BACKGROUND_TASK_INTERVALS } from '../config/constants';

// Utils
import { appLog } from '../utils/logger';

// Types
import { BACKGROUND_TASK, NOTIFICATION_CHANNEL } from '../types/enums';

// Others
import notifee from '@notifee/react-native';
import * as BackgroundFetch from 'expo-background-fetch';
import { isTaskRegisteredAsync } from 'expo-task-manager';
import { t } from 'i18next';
import { checkNotifications, requestNotifications } from 'react-native-permissions';

const registerBackgroundTask = async () => {
  const isTaskRegistered = await isTaskRegisteredAsync(BACKGROUND_TASK.REFRESH_USER);
  if (isTaskRegistered)
    await BackgroundFetch.unregisterTaskAsync(BACKGROUND_TASK.REFRESH_USER)
      .then(() => {
        appLog.debug(`Task ${BACKGROUND_TASK.REFRESH_USER} unregistered`);
      })
      .catch(error => {
        appLog.warn(`Task ${BACKGROUND_TASK.REFRESH_USER} unregistration failed:`, error);
      });

  BackgroundFetch.registerTaskAsync(BACKGROUND_TASK.REFRESH_USER, {
    minimumInterval: BACKGROUND_TASK_INTERVALS[BACKGROUND_TASK.REFRESH_USER],
    stopOnTerminate: false,
    startOnBoot: true,
  })
    .then(() => {
      appLog.debug(
        `Task ${BACKGROUND_TASK.REFRESH_USER} registered with interval ${BACKGROUND_TASK_INTERVALS[BACKGROUND_TASK.REFRESH_USER]} seconds`,
      );
    })
    .catch(error => {
      appLog.error(`Task ${BACKGROUND_TASK.REFRESH_USER} registration failed:`, error);
    });
};

export const registerNotifications = async () => {
  const checkResponse = await checkNotifications();
  if (checkResponse.status !== 'granted') {
    const requestResponse = await requestNotifications(['alert', 'badge', 'sound']);
    if (requestResponse.status !== 'granted') return;
  }

  await notifee.createChannel({
    id: NOTIFICATION_CHANNEL.ADDED_DONATION,
    name: t('notifications:addedDonation'),
  });

  registerBackgroundTask();
};
