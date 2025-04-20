// React
import { useCallback } from 'react';
import { View } from 'react-native';

// Store
import { useAuthStore } from '../store';

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

// Assets
import { UserIcon } from 'lucide-react-native';

// Types
import type { HomeNavigationProp } from '../types/navigation';

// Others
import colors from '../../colors';

function HomeScreen() {
  // Hooks
  const navigation = useNavigation<HomeNavigationProp>();

  // Global states
  const user = useAuthStore(state => state.user!);

  // Callbacks
  const handleUserPress = useCallback(() => {
    navigation.navigate('User');
  }, []);

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5'>
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
          text='messages:hello'
          values={{ name: user.name }}
          className='text-3xl font-bold capitalize text-secondary-500'
        />
      </View>
      <TotalDonationsCard donationsNumber={user.donations_count} gender={user.gender} />
      {user.donations[0] && <NextDonationCard donations={user.donations} gender={user.gender} />}
      <DonationsCentersCard onEditPress={() => navigation.navigate('DonationsCenters')} />
    </BaseScreen>
  );
}

export default HomeScreen;
