// React
import { useCallback } from 'react';
import { RefreshControl, View } from 'react-native';

// Hooks
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';

// Redux
import { selectUser } from '../store/slices/authSlice';
import { logout } from '../store/thunk';

// Api
import { getUser } from '../api/AuthManager';

// Screens
import BaseScreen from './BaseScreen';

// Components
import LocaleText from '../components/commons/LocaleText';
import NextDonationCard from '../components/commons/NextDonationCard';
import TotalDonationsCard from '../components/commons/TotalDonationsCard';
import UserIconButton from '../components/commons/UserIconButton';
import Header from '../components/navigation/Header';

// Utils
import { showAlert } from '../utils/alert';

// Others
import { useMutation } from '@tanstack/react-query';

function HomeScreen() {
  // Hooks
  const dispatch = useAppDispatch();

  // Global states
  const user = useAppSelector(selectUser);

  // Api
  const userMutation = useMutation({ mutationFn: getUser });

  // Callbacks
  const handleUserPress = useCallback(() => {
    dispatch(logout());
  }, []);

  const handleUserRefresh = useCallback(() => {
    userMutation.mutateAsync().catch(() => {
      showAlert('general:error', 'errors:networkRequestError');
    });
  }, []);

  // Render
  return (
    <BaseScreen
      as='scroll'
      className='gap-5'
      refreshControl={
        <RefreshControl refreshing={userMutation.isPending} onRefresh={handleUserRefresh} />
      }
    >
      <Header headerRight={<UserIconButton onPress={handleUserPress} />} />
      <View>
        <LocaleText
          className='text-3xl font-extrabold capitalize text-secondary-500'
          text={['messages:hello', user.name]}
        />
      </View>
      <TotalDonationsCard donationsNumber={user.donations_count} gender={user.gender} />
      <NextDonationCard lastDonation={user.donations.at(-1)} />
    </BaseScreen>
  );
}

export default HomeScreen;
