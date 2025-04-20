// React
import { useMemo } from 'react';
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

// Navigation
import { useNavigation } from '@react-navigation/native';

// Config
import { DONATIONS_ACHIEVEMENTS } from '../config/constants';

// Utils
import { formateDate } from '../utils/formatters';

// Assets
import { SettingsIcon } from 'lucide-react-native';

// Types
import type { HomeNavigationProp } from '../types/navigation';
import type { Achievement } from '../types/structs';

// Others
import colors from '../../colors';
import type { Dictionary } from '../locales';

function UserScreen() {
  // Hooks
  const navigation = useNavigation<HomeNavigationProp>();

  // Global state
  const user = useAuthStore(state => state.user!);

  // Memos
  const [unlockedAchievements, lockedAchievements] = useMemo(
    () =>
      Object.entries(DONATIONS_ACHIEVEMENTS).reduce<[Achievement[], Achievement[]]>(
        (acc, [label, item], index, arr) => {
          const achievement = {
            label: label as Dictionary,
            value: item.interval[user.gender],
          };
          if (achievement.value <= user.donations_count) acc[0].unshift(achievement);
          else if (!item.hidden) acc[1].push(achievement);
          else if (item.hidden && arr[index - 1][1].interval[user.gender] <= user.donations_count)
            acc[1].push(achievement);
          return acc;
        },
        [[], []],
      ),
    [user.gender, user.donations_count],
  );

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5 p-5'>
      <Header
        headerRight={
          <BaseIcon
            icon={SettingsIcon}
            size={20}
            color={colors.secondary[500]}
            onPress={() => navigation.navigate('Settings')}
          />
        }
      />
      <View className='items-center gap-2'>
        <LocaleText
          text={user.name}
          className='text-3xl font-bold capitalize text-secondary-500'
          avoidTranslation
        />
      </View>
      <Card className='gap-1 px-5'>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:caiCode' className='text-sm' />
          <LocaleText text={user.caiCode} className='font-bold' avoidTranslation />
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:birthdate' className='text-sm' />
          <LocaleText text={formateDate(user.birthdate)} className='font-bold' avoidTranslation />
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:section' className='text-sm' />
          <LocaleText text={user.province} className='font-bold' avoidTranslation />
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:email' className='text-sm' />
          <LocaleText text={user.email} className='font-bold' avoidTranslation />
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:phone' className='text-sm' />
          <View>
            <LocaleText text={user.phone} className='font-bold' avoidTranslation />
            {user.secondaryPhone && (
              <LocaleText text={user.secondaryPhone} className='font-bold' avoidTranslation />
            )}
          </View>
        </View>
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:bloodGroup' className='text-sm' />
          <LocaleText
            text={`${user.traits.group} ${user.traits.rh}`}
            className='font-bold'
            avoidTranslation
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
    </BaseScreen>
  );
}

export default UserScreen;
