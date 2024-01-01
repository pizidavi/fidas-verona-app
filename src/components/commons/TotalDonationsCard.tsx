// React
import { useMemo } from 'react';
import { View } from 'react-native';

// Components
import Card from './Card';
import LocaleText from './LocaleText';
import ProgressBar from './ProgressBar';

// Config
import { DONATIONS_LEVELS } from '../../config/constants';

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
  const lastLevel = useMemo(() => {
    const index = DONATIONS_LEVELS[gender].findIndex(level => level > donationsNumber) - 1;
    if (index < 0) return 0;
    return DONATIONS_LEVELS[gender][index];
  }, [donationsNumber]);

  const nextLevel = useMemo(
    () =>
      DONATIONS_LEVELS[gender].find(level => level > donationsNumber) ??
      (Math.floor(donationsNumber / 10) + 1) * 10,
    [donationsNumber],
  );

  const nextLevelProgress = useMemo(
    () => (donationsNumber - lastLevel) / (nextLevel - lastLevel),
    [donationsNumber, lastLevel, nextLevel],
  );

  // Render
  return (
    <Card>
      <View className='items-center'>
        <LocaleText text='messages:congratulations' className='text-lg font-bold' />
        <LocaleText text='messages:youPerformed' />
        <LocaleText text={donationsNumber} className='text-5xl font-extrabold text-primary-500' />
        <LocaleText text='messages:totalDonations' className='lowercase text-dark-300' />
      </View>
      <View className='w-2/3 items-center gap-1'>
        <LocaleText text='messages:nextLevel' className='font-bold' />
        <ProgressBar progress={nextLevelProgress} />
        <LocaleText text={[nextLevel, 'general:donations']} className='lowercase text-dark-300' />
      </View>
    </Card>
  );
}

export default TotalDonationsCard;
