// React
import { useMemo } from 'react';
import { type DimensionValue, View } from 'react-native';

type ProgressBarProps = {
  /** Progress | value between 0 and 1 */
  progress: number;
};

/**
 * ProgressBar component
 * @param props
 */
function ProgressBar({ progress }: ProgressBarProps) {
  // Memos
  const progressWidth = useMemo(() => {
    if (progress < 0) {
      progress = 0;
    } else if (progress > 1) {
      progress = 1;
    }
    return { width: `${progress * 100}%` satisfies DimensionValue };
  }, [progress]);

  // Render
  return (
    <View className='w-full rounded-full bg-secondary-300'>
      <View className='h-2.5 rounded-full bg-secondary-500' style={progressWidth} />
    </View>
  );
}

export default ProgressBar;
