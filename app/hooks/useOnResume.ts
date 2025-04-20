// React
import { useCallback, useEffect } from 'react';
import { Linking, StatusBar } from 'react-native';

// Store
import { useAuthStore } from '../store';
import { getUnsafeLocalAuth } from '../store/local';

// Api
import { postLogin } from '../api/AuthManager';
import { getLatestPreRelease, getLatestRelease } from '../api/SyncManager';

// Config
import { APP_VERSION } from '../config/constants';

// Utils
import { showAlert } from '../utils/alert';
import { handleStandardError } from '../utils/api';
import { appLog } from '../utils/logger';
import { versionToNumber } from '../utils/utils';

// Others
import { channel } from 'expo-updates';

/**
 * OnResume hook
 */
function useOnResume() {
  // Callbacks
  const refreshOnStartup = useCallback(async () => {
    const auth = await getUnsafeLocalAuth();

    if (auth) {
      appLog.debug('Refreshing on startup');
      postLogin({
        username: auth.username,
        passwordSHA256: auth.passwordSHA256,
      }).catch(e => {
        const { axiosError } = handleStandardError(e);
        if (!axiosError?.response?.status) showAlert('general:error', 'errors:networkMissingError');
        else if (axiosError.response.data.code >= 400 && axiosError.response.data.code < 500) {
          showAlert('general:error', 'errors:invalidCredentials');
          useAuthStore.getState().logout();
        } else if (axiosError.response.data.code >= 500)
          showAlert('general:error', 'errors:serverUnavailable');
        else showAlert('general:error', 'errors:internalApplicationError');
      });
    } else {
      useAuthStore.getState().logout();
    }
  }, []);

  const searchAppUpdate = useCallback(() => {
    if (channel !== 'production' && channel !== 'preview') return;
    appLog.debug(`Searching for updates in "${channel}"`);

    const action = channel === 'production' ? getLatestRelease : getLatestPreRelease;
    action()
      .then(({ version, url }) => {
        const currentVersion = versionToNumber(APP_VERSION);
        const newVersion = versionToNumber(version);
        if (currentVersion < newVersion)
          showAlert(
            'general:update',
            ['messages:updateAvailable', `v${APP_VERSION} ⇾ v${version}` as any],
            [
              { text: 'general:later', style: 'cancel' },
              {
                text: 'general:update',
                onPress: () => Linking.openURL(url),
              },
            ],
          );
      })
      .catch(e => appLog.error('Update search failed', e));
  }, []);

  // Effects
  useEffect(() => {
    refreshOnStartup();
    if (!__DEV__) searchAppUpdate();
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
}

export default useOnResume;
