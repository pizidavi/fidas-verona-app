// React
import { useCallback, useMemo } from 'react';
import { View } from 'react-native';

// Hooks
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';

// Redux
import { selectUser } from '../store/slices/authSlice';
import { logout } from '../store/thunk';

// Screens
import BaseScreen from './BaseScreen';

// Components
import AchievementCard from '../components/commons/AchievementCard';
import BaseIcon from '../components/commons/BaseIcon';
import Card from '../components/commons/Card';
import LocaleText from '../components/commons/LocaleText';
import Header from '../components/navigation/Header';

// Config
import { DONATIONS_ACHIEVEMENTS } from '../config/constants';

// Utils
import { formateDate } from '../utils/formatters';

// Types
import { Achievement } from '../types/structs';

// Others
import colors from '../../colors';
import { ArrowLeftEndOnRectangleIcon } from 'react-native-heroicons/outline';

function UserScreen() {
  // Hooks
  const dispatch = useAppDispatch();

  // Global state
  const user = useAppSelector(selectUser);

  // Memos
  const achievements = useMemo(
    () =>
      Object.entries(DONATIONS_ACHIEVEMENTS)
        .reduce((acc, [label, item]) => {
          acc.push({
            label: label,
            value: item[user.gender],
          });
          return acc;
        }, [] as Achievement[])
        .filter(achievement => achievement.value < user.donations_count)
        .reverse(),
    [user.gender, user.donations_count],
  );

  // Callbacks
  const handleLogoutPress = useCallback(() => {
    dispatch(logout());
  }, []);

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5 p-5'>
      <Header
        headerRight={
          <BaseIcon
            icon={ArrowLeftEndOnRectangleIcon}
            size={25}
            color={colors.secondary[500]}
            onPress={handleLogoutPress}
          />
        }
      />
      <View className='items-center gap-2'>
        <LocaleText
          className='text-3xl font-extrabold capitalize text-secondary-500'
          text={user.name}
        />
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
          <LocaleText text={user.phone} className='font-bold' />
        </View>
        {user.secondaryPhone && (
          <View className='flex-row items-center justify-between'>
            <LocaleText text='general:phone' className='text-sm' />
            <LocaleText text={user.phone} className='font-bold' />
          </View>
        )}
        <View className='flex-row items-center justify-between'>
          <LocaleText text='general:bloodGroup' className='text-sm' />
          <LocaleText text={[user.traits.group, user.traits.rh]} className='font-bold' />
        </View>
      </Card>
      <View className='gap-2'>
        <LocaleText text='messages:achievements' className='text-lg font-bold' />
        {achievements.map(achievement => (
          <AchievementCard key={achievement.value} achievement={achievement} />
        ))}
      </View>
    </BaseScreen>
  );
}

export default UserScreen;
