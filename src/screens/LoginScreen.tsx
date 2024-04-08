// React
import { ActivityIndicator, View } from 'react-native';

// Hooks
import useAppSelector from '../hooks/useAppSelector';

// Redux
import { selectUnsafeUser } from '../store/slices/authSlice';

// Screens
import BaseScreen from './BaseScreen';

// Components
import LocaleText from '../components/commons/LocaleText';
import LoginForm from '../components/forms/LoginForm';
import Logo from '../components/icons/Logo';

// Config
import { APP_VERSION } from '../config/constants';

// Others
import colors from '../../colors';

function LoginScreen() {
  // Global state
  const user = useAppSelector(selectUnsafeUser);

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5 p-5'>
      <View className='flex-row justify-center'>
        <Logo size={100} />
      </View>
      <LocaleText
        className='text-center text-3xl font-bold text-secondary-500'
        text='login:login'
      />
      {user === null ? (
        <>
          <View className='flex-1'>
            <LoginForm />
          </View>
          <LocaleText text={APP_VERSION} className='text-center text-xs' />
        </>
      ) : (
        <View className='flex-1 justify-center'>
          <ActivityIndicator size={32} color={colors.secondary[500]} />
        </View>
      )}
    </BaseScreen>
  );
}

export default LoginScreen;
