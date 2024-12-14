// React
import { useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

// Store
import { useConfigStore } from '../../store';

// Components
import BaseIcon from './BaseIcon';
import LocaleText from './LocaleText';

// Assets
import { BookmarkIcon, BookmarkPlusIcon } from 'lucide-react-native';

// Types
import type { DonationsCenter } from '../../types/entities';

// Others
import colors from '../../../colors';

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
  const favoriteDonationsCenters = useConfigStore(state => state.favoriteDonationsCenterIds);

  // Memos
  const favoriteDonationsCenter = useMemo(
    () => favoriteDonationsCenters.includes(donationsCenter.id),
    [favoriteDonationsCenters],
  );

  // Callbacks
  const handleSavePress = useCallback(() => {
    onBookmarkPress?.(donationsCenter.id);
  }, [donationsCenter.id]);

  // Render
  return (
    <View className='flex-row gap-2'>
      <View className='flex-1'>
        <LocaleText
          className='text-lg font-bold text-secondary-500'
          text={donationsCenter.name}
          avoidTranslation
        />
        <LocaleText text={donationsCenter.address} avoidTranslation />
        <View className='flex-row flex-wrap' style={styles.contactContainer}>
          {donationsCenter.phone1 && (
            <LocaleText className='font-semibold' text={donationsCenter.phone1} avoidTranslation />
          )}
          {donationsCenter.phone2 && (
            <LocaleText className='font-semibold' text={donationsCenter.phone2} avoidTranslation />
          )}
          {donationsCenter.email && (
            <LocaleText
              className='font-semibold lowercase'
              text={donationsCenter.email}
              avoidTranslation
            />
          )}
        </View>
      </View>
      <View>
        <BaseIcon
          icon={favoriteDonationsCenter ? BookmarkIcon : BookmarkPlusIcon}
          color={favoriteDonationsCenter ? colors.primary[500] : undefined}
          onPress={handleSavePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    columnGap: 8,
  },
});

export default DonationsCenterCard;
