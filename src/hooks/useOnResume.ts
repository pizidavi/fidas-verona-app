// React
import { useCallback, useEffect } from 'react';
import { Linking, StatusBar } from 'react-native';

// Hooks
import useAppDispatch from './useAppDispatch';

// Redux
import { getUnsafeLocalAuth } from '../store/local';
import { logout } from '../store/thunk';

// Api
import { getUser } from '../api/AuthManager';
import { getCompany, getLatestVersion } from '../api/SyncManager';

// Config
import { APP_VERSION } from '../config/constants';

// Utils
import { showAlert } from '../utils/alert';
import { appLog } from '../utils/logger';

// Others
import i18n, { isLanguageAvailable } from '../locales';
import * as RNLocalize from 'react-native-localize';

/**
 * OnResume hook
 */
function useOnResume() {
  // Hooks
  const dispatch = useAppDispatch();

  // Callbacks
  const refreshOnStartup = useCallback(async () => {
    const auth = await getUnsafeLocalAuth();

    if (auth) {
      appLog.debug('Refreshing on startup');
      getUser()
        .then(() =>
          getCompany().catch(e => {
            appLog.debug('Company sync failed', e);
          }),
        )
        .catch(() => dispatch(logout()));
    } else dispatch(logout());
  }, []);

  const searchAppUpdate = useCallback(async () => {
    appLog.debug('Searching for updates');
    getLatestVersion()
      .then(({ version, url }) => {
        if (version !== APP_VERSION) {
          showAlert('general:update', 'messages:updateAvailable', [
            { text: 'general:later', style: 'cancel' },
            {
              text: 'general:update',
              onPress: () => Linking.openURL(url),
            },
          ]);
        }
      })
      .catch(e => {
        appLog.debug('Update search failed', e);
      });
  }, []);

  const updateLanguage = useCallback(() => {
    const { languageCode } = RNLocalize.getLocales()[0];

    if (isLanguageAvailable(languageCode) && languageCode !== i18n.language) {
      appLog.debug(`Updated language from ${i18n.language} to ${languageCode}`);
      i18n.changeLanguage(languageCode);
    }
  }, [i18n.language]);

  // Effects
  useEffect(() => {
    refreshOnStartup();
    if (!__DEV__) searchAppUpdate();
    updateLanguage();
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
}

export default useOnResume;
