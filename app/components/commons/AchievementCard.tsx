// React
import { View } from 'react-native';

// Components
import Card from './Card';
import LocaleText from './LocaleText';

// Assets
import { TrophyIcon } from 'lucide-react-native';

// Types
import { Achievement } from '../../types/structs';

type AchievementCardProps = {
  /** Achievement */
  achievement: Achievement;
};

/**
 * Achievement card component
 * @param props
 */
function AchievementCard({ achievement }: AchievementCardProps) {
  // Render
  return (
    <Card className='flex-row items-center gap-3 bg-secondary-500 p-4'>
      <TrophyIcon size={30} color='white' />
      <View>
        <LocaleText text={achievement.label} className='text-xl font-bold text-white' />
        <View className='mt-[-5] flex-row items-center gap-1'>
          <LocaleText text={achievement.value} className='text-lg font-bold text-white' />
          <LocaleText text='general:donations' className='font-semibold text-white' />
        </View>
      </View>
    </Card>
  );
}

export default AchievementCard;
