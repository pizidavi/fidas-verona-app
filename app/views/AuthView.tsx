// React
import { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';

// Views
import HomeView from './HomeView';

// Screens
import DonationsCentersScreen from '../screens/DonationsCentersScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import UserScreen from '../screens/UserScreen';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Config
import { BACKGROUND_TASK_INTERVALS } from '../config/constants';

// Utils
import { appLog } from '../utils/logger';

// Types
import type { HomeStackParamList } from '../types/navigation';
import { BACKGROUND_TASK, NOTIFICATION_CHANNEL } from '../types/enums';

// Others
import notifee, { AuthorizationStatus } from '@notifee/react-native';
import * as BackgroundFetch from 'expo-background-fetch';
import { isTaskRegisteredAsync } from 'expo-task-manager';
import { t } from 'i18next';

const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Auth view
 */
function AuthView() {
  // Callbacks
  const registerBackgroundTask = useCallback(async () => {
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
  }, []);

  const handleNotifications = useCallback(async () => {
    const settings = await notifee.requestPermission();
    if (settings.authorizationStatus !== AuthorizationStatus.AUTHORIZED) return;

    notifee
      .isBatteryOptimizationEnabled()
      .then(enabled => {
        if (enabled) return notifee.openBatteryOptimizationSettings();
        else appLog.info('Battery optimization disabled');
      })
      .catch(error => {
        appLog.error('Battery optimization failed:', error);
      });

    await notifee.createChannel({
      id: NOTIFICATION_CHANNEL.ADDED_DONATION,
      name: t('notifications:addedDonation'),
    });

    registerBackgroundTask();
  }, []);

  // Effects
  useEffect(() => {
    handleNotifications();
  }, []);

  // Render
  return (
    <Stack.Navigator
      initialRouteName='HomeView'
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        animation: Platform.select({ ios: 'ios_from_right', android: 'fade' }),
      }}
    >
      <Stack.Screen name='HomeView' component={HomeView} />
      <Stack.Screen name='DonationsCenters' component={DonationsCentersScreen} />
      <Stack.Screen name='NewsDetails' component={NewsDetailsScreen} />
      <Stack.Screen name='User' component={UserScreen} />
    </Stack.Navigator>
  );
}

export default AuthView;
