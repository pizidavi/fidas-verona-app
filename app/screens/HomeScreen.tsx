// React
import { useCallback, useMemo } from 'react';
import { Pressable, View } from 'react-native';

// Store
import { useAuthStore } from '../store';

// Api
import { getNews } from '../api/SyncManager';
import { useQuery } from '@tanstack/react-query';

// Screens
import BaseScreen from './BaseScreen';

// Components
import BaseIcon from '../components/commons/BaseIcon';
import Card from '../components/commons/Card';
import DonationsCentersCard from '../components/commons/DonationsCentersCard';
import LocaleText from '../components/commons/LocaleText';
import NextDonationCard from '../components/commons/NextDonationCard';
import TotalDonationsCard from '../components/commons/TotalDonationsCard';
import Header from '../components/navigation/Header';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Assets
import { MegaphoneIcon, UserIcon } from 'lucide-react-native';

// Types
import type { HomeNavigationProp } from '../types/navigation';

// Others
import colors from '../../colors';

function HomeScreen() {
  // Hooks
  const navigation = useNavigation<HomeNavigationProp>();

  // Global states
  const user = useAuthStore(state => state.user!);

  // Api
  const newsQuery = useQuery({ queryFn: getNews, queryKey: ['news'] });

  // Memos
  const importantNews = useMemo(
    () => newsQuery.data?.find(item => item.id === 797),
    [newsQuery.data],
  );

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
      {importantNews && (
        <Pressable onPress={() => navigation.navigate('NewsDetails', { news: importantNews })}>
          <Card>
            <View className='flex-row items-center gap-4'>
              <BaseIcon
                icon={MegaphoneIcon}
                size={20}
                color={colors.secondary[500]}
                className='p-0'
              />
              <LocaleText
                className='font-semibold text-secondary-500'
                text={importantNews.title}
                avoidTranslation
              />
            </View>
          </Card>
        </Pressable>
      )}
      <TotalDonationsCard donationsNumber={user.donations_count} gender={user.gender} />
      {user.donations[0] && <NextDonationCard donations={user.donations} gender={user.gender} />}
      <DonationsCentersCard onEditPress={() => navigation.navigate('DonationsCenters')} />
    </BaseScreen>
  );
}

export default HomeScreen;
