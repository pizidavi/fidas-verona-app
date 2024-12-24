// React
import { useCallback, useEffect } from 'react';
import { Linking, StatusBar } from 'react-native';

// Store
import { useAuthStore } from '../store';
import { getUnsafeLocalAuth } from '../store/local';

// Api
import { getUser } from '../api/AuthManager';
import { getCompany, getLatestPreRelease, getLatestRelease } from '../api/SyncManager';

// Config
import { APP_VERSION } from '../config/constants';

// Utils
import { showAlert } from '../utils/alert';
import { appLog } from '../utils/logger';
import { versionToNumber } from '../utils/utils';

// Others
import i18n, { isLanguageAvailable } from '../locales';
import * as Localization from 'expo-localization';
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
      getUser()
        .then(() => getCompany())
        .catch(() => {
          showAlert('general:error', 'errors:networkMissingError');
        });
    } else useAuthStore.getState().logout();
  }, []);

  const searchAppUpdate = useCallback(async () => {
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
            ['messages:updateAvailable', `v${APP_VERSION} ⇾ v${version}`],
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

  const updateLanguage = useCallback(() => {
    const locale = Localization.getLocales()[0];
    const languageCode = locale.languageCode || locale.languageTag.split('-')[0];

    if (isLanguageAvailable(languageCode) && languageCode !== i18n.language) {
      appLog.debug(`Updated language from ${i18n.language} to ${languageCode}`);
      i18n.changeLanguage(languageCode);
    }
  }, [i18n.language]);

  // Effects
  useEffect(() => {
    refreshOnStartup();
    updateLanguage();
    if (!__DEV__) searchAppUpdate();
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
}

export default useOnResume;
