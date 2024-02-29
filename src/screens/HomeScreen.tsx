// React
import { useCallback } from 'react';
import { RefreshControl, View } from 'react-native';

// Hooks
import useAppSelector from '../hooks/useAppSelector';

// Redux
import { selectUser } from '../store/slices/authSlice';

// Api
import { getUser } from '../api/AuthManager';

// Screens
import BaseScreen from './BaseScreen';

// Components
import BaseIcon from '../components/commons/BaseIcon';
import DonationsCentersCard from '../components/commons/DonationsCentersCard';
import LocaleText from '../components/commons/LocaleText';
import NextDonationCard from '../components/commons/NextDonationCard';
import TotalDonationsCard from '../components/commons/TotalDonationsCard';
import Header from '../components/navigation/Header';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Utils
import { showAlert } from '../utils/alert';

// Types
import { HomeNavigationProp } from '../types/navigation';

// Others
import colors from '../../colors';
import { useMutation } from '@tanstack/react-query';
import { UserIcon } from 'react-native-heroicons/outline';

function HomeScreen() {
  // Hooks
  const navigation = useNavigation<HomeNavigationProp>();

  // Global states
  const user = useAppSelector(selectUser);

  // Api
  const userMutation = useMutation({ mutationFn: getUser });

  // Callbacks
  const handleUserPress = useCallback(() => {
    navigation.navigate('User');
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
        <RefreshControl
          refreshing={userMutation.isPending}
          onRefresh={handleUserRefresh}
          colors={[colors.secondary[500]]}
        />
      }
    >
      <Header
        headerRight={
          <BaseIcon
            icon={UserIcon}
            size={25}
            color={colors.secondary[100]}
            className='rounded-full bg-secondary-500'
            onPress={handleUserPress}
          />
        }
      />
      <View>
        <LocaleText
          className='text-3xl font-extrabold capitalize text-secondary-500'
          text={['messages:hello', user.name]}
        />
      </View>
      <TotalDonationsCard donationsNumber={user.donations_count} gender={user.gender} />
      {user.donations[0] && (
        <NextDonationCard lastDonation={user.donations[0]} gender={user.gender} />
      )}
      <DonationsCentersCard onEditPress={() => navigation.navigate('DonationsCenters')} />
    </BaseScreen>
  );
}

export default HomeScreen;
