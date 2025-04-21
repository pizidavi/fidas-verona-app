// React
import { useCallback, useEffect, useRef } from 'react';
import { Linking, Pressable, View } from 'react-native';

// Hooks
import useOnForegroundEffect from '../hooks/useOnForeground';

// Store
import { useAuthStore } from '../store';
import { LocalStorage } from '../store/local';

// Screens
import BaseScreen from './BaseScreen';

// Components
import BaseIcon from '../components/commons/BaseIcon';
import BaseSwitch, { type BaseSwitchRef } from '../components/commons/BaseSwitch';
import Card from '../components/commons/Card';
import LocaleText from '../components/commons/LocaleText';
import GithubIcon from '../components/icons/Github';
import Header from '../components/navigation/Header';

// Config
import { APP_ENV, APP_VERSION, REPOSITORY_URL } from '../config/constants';

// Utils
import { showAlert } from '../utils/alert';
import { formateDate } from '../utils/formatters';

// Assets
import { LogOutIcon } from 'lucide-react-native';

// Types
import { STORAGE_KEY } from '../types/enums';

// Others
import colors from '../../colors';
import notifee, { AuthorizationStatus } from '@notifee/react-native';
import * as Updates from 'expo-updates';
import { registerNotifications } from '../services/notifications';
import { requestNotifications, openSettings } from 'react-native-permissions';

function SettingsScreen() {
  const lastRefreshUserUpdate = LocalStorage.getItem(STORAGE_KEY.LAST_BACKGROUND_TASK_REFRESH_USER);

  // References
  const notificationStatusSwitchRef = useRef<BaseSwitchRef>(null);
  const batteryStatusSwitchRef = useRef<BaseSwitchRef>(null);

  // Callbacks
  const handleLogoutPress = useCallback(() => {
    showAlert('general:warning', 'messages:logoutMessage', [
      { text: 'general:cancel', style: 'cancel' },
      {
        text: 'general:logout',
        style: 'destructive',
        onPress: () => useAuthStore.getState().logout(),
      },
    ]);
  }, []);

  const handleNotificationsPress = useCallback((value: boolean) => {
    if (!value) {
      return notifee.openNotificationSettings();
    }

    requestNotifications(['alert', 'badge', 'sound']).then(({ status }) => {
      if (status === 'blocked') return notifee.openNotificationSettings();
    });
  }, []);

  const handleBatteryPress = useCallback(() => openSettings('application'), []);

  // Effects
  useEffect(() => {
    notifee.getNotificationSettings().then(response => {
      const authorized = response.authorizationStatus === AuthorizationStatus.AUTHORIZED;
      notificationStatusSwitchRef.current?.setValue(authorized);
    });

    notifee.isBatteryOptimizationEnabled().then(isEnabled => {
      batteryStatusSwitchRef.current?.setValue(isEnabled);
    });
  }, []);

  useOnForegroundEffect(() => {
    notifee.getNotificationSettings().then(response => {
      const authorized = response.authorizationStatus === AuthorizationStatus.AUTHORIZED;

      const prev = notificationStatusSwitchRef.current?.getValue();
      notificationStatusSwitchRef.current?.setValue(authorized);

      if (!prev && authorized) registerNotifications();
    });

    notifee.isBatteryOptimizationEnabled().then(isEnabled => {
      batteryStatusSwitchRef.current?.setValue(isEnabled);
    });
  }, []);

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5 p-5'>
      <Header
        headerRight={
          <BaseIcon
            icon={LogOutIcon}
            size={20}
            color={colors.secondary[500]}
            onPress={handleLogoutPress}
          />
        }
      />
      <View className='items-center gap-2'>
        <LocaleText
          className='text-3xl font-bold capitalize text-secondary-500'
          text='settings:title'
        />
      </View>
      <Card className='gap-1'>
        <Pressable
          onPress={() => notifee.openNotificationSettings()}
          className='flex-row items-center justify-between'
        >
          <LocaleText text='settings:notifications' className='font-bold' />
          <BaseSwitch ref={notificationStatusSwitchRef} onValueChange={handleNotificationsPress} />
        </Pressable>
        {APP_ENV !== 'production' && lastRefreshUserUpdate && (
          <View className='flex-row flex-wrap items-center justify-between gap-2'>
            <LocaleText text='settings:lastUpdate' className='text-sm text-dark-300' />
            <LocaleText
              text={new Date(lastRefreshUserUpdate).toLocaleString()}
              className='text-sm text-dark-300'
              avoidTranslation
            />
          </View>
        )}
      </Card>
      <Card className='gap-1'>
        <Pressable onPress={handleBatteryPress} className='flex-row items-center justify-between'>
          <LocaleText text='settings:batteryOptimization' className='font-bold' />
          <BaseSwitch ref={batteryStatusSwitchRef} onValueChange={handleBatteryPress} />
        </Pressable>
        <LocaleText
          text='settings:batteryOptimizationDescription'
          className='text-sm text-dark-300'
        />
      </Card>
      <Card>
        <View className='flex-row items-center gap-2'>
          <GithubIcon size={20} />
          <LocaleText text='settings:sourceCode' className='font-bold' />
        </View>
        <LocaleText
          text={`https://github.com/${REPOSITORY_URL}`}
          onPress={() => Linking.openURL(`https://github.com/${REPOSITORY_URL}`)}
          avoidTranslation
        />
      </Card>
      <Card>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='settings:version' />
          <LocaleText
            text={
              `v${APP_VERSION}` +
              (!Updates.isEmbeddedLaunch && Updates.createdAt
                ? ' - ' + formateDate(Updates.createdAt)
                : '')
            }
            avoidTranslation
          />
        </View>
      </Card>
    </BaseScreen>
  );
}

export default SettingsScreen;
