// React
import { useCallback, useState } from 'react';
import { View } from 'react-native';

// Api
import { postLogin } from '../../api/AuthManager';

// Components
import BaseButton from '../commons/BaseButton';
import BaseInput from '../commons/BaseInput';

// Config
import { DEV_PASSWORD, DEV_USERNAME } from '../../config/constants';

// Utils
import { showAlert } from '../../utils/alert';
import { handleStandardError } from '../../utils/api';
import { appLog } from '../../utils/logger';

// Others
import { useMutation } from '@tanstack/react-query';

/**
 * Login form
 */
function LoginForm() {
  // State
  const [form, setForm] = useState({
    username: __DEV__ ? DEV_USERNAME : '',
    password: __DEV__ ? DEV_PASSWORD : '',
  });

  // Api
  const loginMutation = useMutation({ mutationFn: postLogin });

  // Callbacks
  const handleLoginPress = useCallback(() => {
    if (!form.username || !form.password)
      return showAlert('general:error', 'errors:completeFields');

    loginMutation
      .mutateAsync({
        username: form.username,
        password: form.password,
      })
      .then(() => appLog.info('Login success'))
      .catch(e => {
        appLog.error('Error during login', e);
        const { axiosError, error } = handleStandardError(e);
        if (axiosError) {
          if (axiosError.response?.status === 401)
            showAlert('general:error', 'errors:invalidCredentials');
          else if (!axiosError.response?.status)
            showAlert('general:error', 'errors:networkMissingError');
          else if (axiosError.response?.status >= 500)
            showAlert('general:error', 'errors:serverUnavailable');
          else showAlert('general:error', 'errors:networkRequestError');
        } else if (error) showAlert('general:error', 'errors:internalApplicationError');
      });
  }, [form]);

  // Render
  return (
    <View className='gap-2'>
      <BaseInput
        title='login:username'
        value={form.username}
        onChangeText={v => setForm({ ...form, username: v })}
        autoComplete='username'
        autoCapitalize='none'
        autoCorrect={false}
        validator={v => (v === '' ? 'errors:required' : undefined)}
      />
      <BaseInput
        title='login:password'
        value={form.password}
        onChangeText={v => setForm({ ...form, password: v })}
        autoComplete='password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
        validator={v => (v === '' ? 'errors:required' : undefined)}
      />
      <BaseButton text='login:login' onPress={handleLoginPress} loading={loginMutation.isPending} />
    </View>
  );
}

export default LoginForm;
