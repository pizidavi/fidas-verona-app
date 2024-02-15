// React
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

// Hooks
import useAppSelector from '../../hooks/useAppSelector';

// Redux
import { selectDonationsCenter } from '../../store/slices/configSlice';

// Components
import BaseIcon from './BaseIcon';
import LocaleText from './LocaleText';

// Types
import { DonationsCenter } from '../../types/entities';

// Others
import colors from '../../../colors';
import { BookmarkIcon as BookmarkUnsavedIcon } from 'react-native-heroicons/outline';
import { BookmarkIcon as BookmarkSavedIcon } from 'react-native-heroicons/solid';

type DonationsCenterCardProps = {
  /** DonationCenter */
  donationsCenter: DonationsCenter;
  onBookmarkPress?: (id: DonationsCenter['id']) => void;
};

/**
 * DonationsCenterCard component
 * @param props
 */
function DonationsCenterCard({ donationsCenter, onBookmarkPress }: DonationsCenterCardProps) {
  // Global state
  const favoriteDonationsCenter = useAppSelector(state =>
    selectDonationsCenter(state, donationsCenter.id),
  );

  // Callbacks
  const handleSavePress = useCallback(() => {
    onBookmarkPress?.(donationsCenter.id);
  }, [donationsCenter.id]);

  // Render
  return (
    <View className='flex-row gap-4'>
      <View className='flex-1'>
        <LocaleText className='text-lg font-bold text-secondary-500' text={donationsCenter.name} />
        <LocaleText text={donationsCenter.address} />
        <View className='flex-row flex-wrap' style={styles.contactContainer}>
          {donationsCenter.phone1 && (
            <LocaleText className='font-semibold' text={donationsCenter.phone1} />
          )}
          {donationsCenter.phone2 && (
            <LocaleText className='font-semibold' text={donationsCenter.phone2} />
          )}
          {donationsCenter.email && (
            <LocaleText className='font-semibold lowercase' text={donationsCenter.email} />
          )}
        </View>
      </View>
      <View>
        <BaseIcon
          icon={favoriteDonationsCenter ? BookmarkSavedIcon : BookmarkUnsavedIcon}
          color={favoriteDonationsCenter ? colors.primary[500] : undefined}
          onPress={handleSavePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    columnGap: 12,
  },
});

export default DonationsCenterCard;
