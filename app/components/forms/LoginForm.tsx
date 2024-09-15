// React
import { useCallback, useState } from 'react';
import { Linking, View } from 'react-native';

// Api
import { postLogin } from '../../api/AuthManager';
import { useMutation } from '@tanstack/react-query';

// Components
import BaseButton from '../commons/BaseButton';
import BaseInput from '../commons/BaseInput';
import LocaleText from '../commons/LocaleText';

// Config
import { DEV_PASSWORD, DEV_USERNAME, FORGOT_PASSWORD_URL } from '../../config/constants';

// Utils
import { showAlert } from '../../utils/alert';
import { handleStandardError } from '../../utils/api';
import { appLog } from '../../utils/logger';
import { validateRequired } from '../../utils/validators';

/**
 * Login form
 */
function LoginForm() {
  // State
  const [form, setForm] = useState({
    username: __DEV__ && DEV_USERNAME ? DEV_USERNAME : '',
    password: __DEV__ && DEV_PASSWORD ? DEV_PASSWORD : '',
  });

  // Api
  const loginMutation = useMutation({ mutationFn: postLogin });

  // Callbacks
  const handleLoginPress = useCallback(() => {
    if (!form.username || !form.password)
      return showAlert('general:error', 'errors:completeFields');

    loginMutation
      .mutateAsync({
        username: form.username.replace(/^0+/, ''),
        password: form.password,
      })
      .then(() => appLog.info('Login success'))
      .catch(e => {
        appLog.error('Error during login', e);
        const { axiosError, error } = handleStandardError(e);
        if (axiosError) {
          if (!axiosError.response?.status)
            showAlert('general:error', 'errors:networkMissingError');
          else if (axiosError.response?.status >= 400)
            showAlert('general:error', 'errors:invalidCredentials');
          else showAlert('general:error', 'errors:networkRequestError');
        } else if (error) showAlert('general:error', 'errors:internalApplicationError');
      });
  }, [form]);

  const handleForgotPasswordPress = useCallback(() => {
    Linking.openURL(FORGOT_PASSWORD_URL);
  }, []);

  // Render
  return (
    <View className='gap-2'>
      <BaseInput
        title='general:caiCode'
        value={form.username}
        onChangeText={v => setForm({ ...form, username: v })}
        keyboardType='numeric'
        autoComplete='username'
        autoCapitalize='none'
        autoCorrect={false}
        validator={validateRequired}
      />
      <BaseInput
        title='login:password'
        value={form.password}
        onChangeText={v => setForm({ ...form, password: v })}
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
