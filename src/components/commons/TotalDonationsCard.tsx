// React
import { useMemo } from 'react';
import { View } from 'react-native';

// Components
import Card from './Card';
import LocaleText from './LocaleText';
import ProgressBar from './ProgressBar';

// Config
import { DONATIONS_ACHIEVEMENTS } from '../../config/constants';

// Types
import { User } from '../../types/entities';

type TotalDonationsCardProps = {
  donationsNumber: number;
  gender: User['gender'];
};

/**
 * TotalDonationsCard component
 * @param props
 */
function TotalDonationsCard({ donationsNumber, gender }: TotalDonationsCardProps) {
  // Memos
  const lastAchievement = useMemo<number>(() => {
    const achievements = Object.values(DONATIONS_ACHIEVEMENTS).reduce((acc, item) => {
      acc.push(item[gender]);
      return acc;
    }, [] as number[]);

    const index = achievements.findIndex(achievement => achievement > donationsNumber) - 1;
    if (index < 0) return 0;
    return achievements[index];
  }, [donationsNumber, gender]);

  const nextAchievement = useMemo<number>(() => {
    const achievements = Object.values(DONATIONS_ACHIEVEMENTS).reduce((acc, item) => {
      acc.push(item[gender]);
      return acc;
    }, [] as number[]);

    return (
      achievements.find(achievement => achievement > donationsNumber) ??
      (Math.floor(donationsNumber / 10) + 1) * 10
    );
  }, [donationsNumber, gender]);

  const nextAchievementProgress = useMemo<number>(
    () => (donationsNumber - lastAchievement) / (nextAchievement - lastAchievement),
    [donationsNumber, lastAchievement, nextAchievement],
  );

  // Render
  return (
    <Card className='items-center'>
      <View className='items-center'>
        <LocaleText text='messages:congratulations' className='text-lg font-bold' />
        <LocaleText text='messages:youPerformed' />
        <LocaleText text={donationsNumber} className='text-5xl font-extrabold text-primary-500' />
        <LocaleText text='messages:totalDonations' className='lowercase text-dark-300' />
      </View>
      <View className='w-2/3 items-center gap-1'>
        <LocaleText text='messages:nextAchievement' className='font-bold' />
        <ProgressBar progress={nextAchievementProgress} />
        <LocaleText
          text={[nextAchievement, 'general:donations']}
          className='lowercase text-dark-300'
        />
      </View>
    </Card>
  );
}

export default TotalDonationsCard;
