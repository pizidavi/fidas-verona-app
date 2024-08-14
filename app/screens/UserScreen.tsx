// React
import { useCallback, useMemo } from 'react';
import { View } from 'react-native';

// Store
import { useAuthStore } from '../store';

// Screens
import BaseScreen from './BaseScreen';

// Components
import AchievementCard from '../components/commons/AchievementCard';
import BaseIcon from '../components/commons/BaseIcon';
import Card from '../components/commons/Card';
import LocaleText from '../components/commons/LocaleText';
import Header from '../components/navigation/Header';

// Config
import { APP_VERSION, DONATIONS_ACHIEVEMENTS } from '../config/constants';

// Utils
import { showAlert } from '../utils/alert';
import { formateDate } from '../utils/formatters';

// Assets
import { LogOutIcon } from 'lucide-react-native';

// Types
import { Achievement } from '../types/structs';

// Others
import colors from '../../colors';
import * as Updates from 'expo-updates';

function UserScreen() {
  // Global state
  const user = useAuthStore(state => state.user!);

  // Memos
  const [unlockedAchievements, lockedAchievements] = useMemo(
    () =>
      Object.entries(DONATIONS_ACHIEVEMENTS).reduce(
        (acc, [label, item]) => {
          const a = {
            label: label,
            value: item[user.gender],
          };
          if (a.value <= user.donations_count) acc[0].unshift(a);
          else acc[1].push(a);
          return acc;
        },
        [[], []] as [Achievement[], Achievement[]],
      ),
    [user.gender, user.donations_count],
  );

  // Callbacks
  const handleLogoutPress = useCallback(() => {
    showAlert('general:warning', 'messages:logoutMessage', [
      { text: 'general:cancel', style: 'cancel' },
      {
        text: 'general:logout',
        style: 'destructive',
        onPress: () => useAuthStore.getState().logout(),
      },
    ]);
  }, []);

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5 p-5'>
      <Header
        headerRight={
          <BaseIcon
            icon={LogOutIcon}
            size={20}
            color={colors.secondary[500]}
            onPress={handleLogoutPress}
          />
        }
      />
      <View className='items-center gap-2'>
        <LocaleText className='text-3xl font-bold capitalize text-secondary-500' text={user.name} />
      </View>
      <Card className='gap-1 px-5'>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:caiCode' className='text-sm' />
          <LocaleText text={user.caiCode} className='font-bold' />
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:birthdate' className='text-sm' />
          <LocaleText text={formateDate(user.birthdate)} className='font-bold' />
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:section' className='text-sm' />
          <LocaleText text={user.province} className='font-bold' />
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:email' className='text-sm' />
          <LocaleText text={user.email} className='font-bold' />
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:phone' className='text-sm' />
          <View>
            <LocaleText text={user.phone} className='font-bold' />
            {user.secondaryPhone && <LocaleText text={user.secondaryPhone} className='font-bold' />}
          </View>
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:bloodGroup' className='text-sm' />
          <LocaleText
            text={[user.traits.group, user.traits.type ?? '', user.traits.rh]}
            className='font-bold'
          />
        </View>
      </Card>
      <View className='flex-1 gap-2'>
        <LocaleText text='messages:achievements' className='text-lg font-bold' />
        {unlockedAchievements.map(achievement => (
          <AchievementCard key={achievement.value} achievement={achievement} />
        ))}
        {lockedAchievements.map(achievement => (
          <AchievementCard key={achievement.value} achievement={achievement} variant='locked' />
        ))}
      </View>
      <LocaleText
        text={
          `v${APP_VERSION}` +
          (!Updates.isEmbeddedLaunch && Updates.createdAt
            ? ' - ' + formateDate(Updates.createdAt)
            : '')
        }
        className='text-center text-xs'
        avoidTranslation
      />
    </BaseScreen>
  );
}

export default UserScreen;
