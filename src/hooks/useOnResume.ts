// React
import { useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';

// Hooks
import useAppDispatch from './useAppDispatch';

// Redux
import { getUnsafeLocalAuth } from '../store/local';
import { logout } from '../store/thunk';

// Api
import { getUser } from '../api/AuthManager';
import { getCompany } from '../api/SyncManager';

// Utils
import { appLog } from '../utils/logger';

// Types
import { AuthError } from '../types/errors';

// Others
import i18n, { isLanguageAvailable } from '../locales';
import * as RNLocalize from 'react-native-localize';
import { useMutation } from '@tanstack/react-query';

/**
 * OnResume hook
 */
function useOnResume() {
  // Hooks
  const dispatch = useAppDispatch();

  // Api
  const userMutation = useMutation({ mutationFn: getUser });
  const companyMutation = useMutation({ mutationFn: getCompany });

  // Callbacks
  const refreshOnStartup = useCallback(async () => {
    const auth = await getUnsafeLocalAuth();

    if (auth) {
      appLog.debug('Refreshing on startup');
      userMutation
        .mutateAsync()
        .catch(() => {
          dispatch(logout());
          throw new AuthError();
        })
        .then(() => companyMutation.mutateAsync());
    } else dispatch(logout());
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
    updateLanguage();
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
}

export default useOnResume;
