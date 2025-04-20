// React
import { useCallback, useRef } from 'react';
import { Linking, View } from 'react-native';

// Api
import { postLogin } from '../../api/AuthManager';
import { getCompany } from '../../api/SyncManager';
import { useMutation } from '@tanstack/react-query';

// Components
import BaseButton from '../commons/BaseButton';
import BaseInput from '../commons/BaseInput';
import LocaleText from '../commons/LocaleText';

// Config
import { DEV_PASSWORD, DEV_USERNAME, FORGOT_PASSWORD_URL } from '../../config/constants';

// Utils
import { showAlert } from '../../utils/alert';
import { generateHash, handleStandardError } from '../../utils/api';
import { appLog } from '../../utils/logger';
import { validateRequired } from '../../utils/validators';

/**
 * Login form
 */
function LoginForm() {
  // References
  const usernameRef = useRef<string>(__DEV__ && DEV_USERNAME ? DEV_USERNAME : '');
  const passwordRef = useRef<string>(__DEV__ && DEV_PASSWORD ? DEV_PASSWORD : '');

  // Api
  const loginMutation = useMutation({ mutationFn: postLogin });

  // Callbacks
  const handleLoginPress = useCallback(() => {
    if (!usernameRef.current || !passwordRef.current)
      return showAlert('general:error', 'errors:completeFields');

    loginMutation
      .mutateAsync({
        username: usernameRef.current.replace(/^0+/, ''),
        passwordSHA256: generateHash(passwordRef.current),
      })
      .then(() => {
        getCompany();
      })
      .then(() => appLog.info('Login success'))
      .catch(e => {
        appLog.error('Error during login', e);
        const { axiosError } = handleStandardError(e);
        if (!axiosError?.response?.status) showAlert('general:error', 'errors:networkMissingError');
        else if (axiosError.response.data.code >= 400 && axiosError.response.data.code < 500)
          showAlert('general:error', 'errors:invalidCredentials');
        else if (axiosError.response.data.code >= 500)
          showAlert('general:error', 'errors:serverUnavailable');
        else showAlert('general:error', 'errors:internalApplicationError');
      });
  }, []);

  const handleForgotPasswordPress = useCallback(() => {
    Linking.openURL(FORGOT_PASSWORD_URL);
  }, []);

  // Render
  return (
    <View className='gap-2'>
      <BaseInput
        title='general:caiCode'
        defaultValue={usernameRef.current}
        onChangeText={v => (usernameRef.current = v)}
        keyboardType='numeric'
        autoComplete='username'
        autoCapitalize='none'
        autoCorrect={false}
        validator={validateRequired}
      />
      <BaseInput
        title='login:password'
        defaultValue={passwordRef.current}
        onChangeText={v => (passwordRef.current = v)}
        autoComplete='password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
        validator={validateRequired}
      />
      <BaseButton text='login:login' onPress={handleLoginPress} loading={loginMutation.isPending} />
      <LocaleText
        text='login:forgotPassword'
        className='py-2 text-center text-secondary-500 underline'
        onPress={handleForgotPasswordPress}
      />
    </View>
  );
}

export default LoginForm;
