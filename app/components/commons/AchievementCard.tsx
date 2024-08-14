// React
import { View } from 'react-native';

// Components
import Card from './Card';
import LocaleText from './LocaleText';

// Utils
import { clx } from '../../utils/utils';

// Assets
import { TrophyIcon, LockIcon } from 'lucide-react-native';

// Types
import { Achievement } from '../../types/structs';

type AchievementCardProps = {
  /** Achievement */
  achievement: Achievement;
  /** Card variant */
  variant?: 'unlocked' | 'locked';
};

/**
 * Achievement card component
 * @param props
 */
function AchievementCard(props: AchievementCardProps) {
  const { achievement, variant = 'unlocked' } = props;

  // Render
  return (
    <Card
      className={clx(
        'flex-row items-center gap-3 border border-transparent bg-secondary-500 p-4',
        variant === 'locked' && 'border-gray-400 bg-secondary-100 opacity-80',
      )}
    >
      {variant === 'unlocked' ? (
        <TrophyIcon size={30} color='white' />
      ) : (
        <LockIcon size={30} color='gray' />
      )}
      <View>
        <LocaleText
          text={achievement.label}
          className={clx('text-xl font-bold text-white', variant === 'locked' && 'text-gray-500')}
        />
        <View className='mt-[-5] flex-row items-center gap-1'>
          <LocaleText
            text={achievement.value}
            className={clx('text-lg font-bold text-white', variant === 'locked' && 'text-gray-500')}
          />
          <LocaleText
            text='general:donations'
            className={clx('font-semibold text-white', variant === 'locked' && 'text-gray-500')}
          />
        </View>
      </View>
    </Card>
  );
}

export default AchievementCard;
