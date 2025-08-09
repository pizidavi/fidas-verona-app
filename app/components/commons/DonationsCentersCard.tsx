// React
import { useCallback, useMemo } from 'react';
import { View } from 'react-native';

// Store
import { useConfigStore, useDataStore } from '../../store';

// Components
import BaseIcon from './BaseIcon';
import Card from './Card';
import DonationsCenterCard from './DonationsCenterCard';
import LocaleText from './LocaleText';

// Utils
import { showAlert } from '../../utils/alert';

// Assets
import { PencilIcon } from 'lucide-react-native';

// Types
import type { DonationsCenter } from '../../types/entities';

type DonationsCentersCardProps = {
  onEditPress?: () => void;
};

/**
 * DonationsCentersCard component
 * @param props
 */
function DonationsCentersCard({ onEditPress }: DonationsCentersCardProps) {
  // Global state
  const donationsCenters = useDataStore(state => state.company?.donationsCenters);
  const favoriteDonationsCentersIds = useConfigStore(state => state.favoriteDonationsCenterIds);

  // Memos
  const favoriteDonationsCenters = useMemo(
    () =>
      donationsCenters?.filter(donationsCenter =>
        favoriteDonationsCentersIds.includes(donationsCenter.id),
      ),
    [donationsCenters, favoriteDonationsCentersIds],
  );

  // Callbacks
  const handleBookmarkPress = useCallback((id: DonationsCenter['id']) => {
    showAlert('general:warning', 'messages:confirmOperation', [
      { text: 'general:cancel', style: 'cancel' },
      {
        text: 'general:ok',
        style: 'destructive',
        onPress: () => useConfigStore.getState().removeFavoriteDonationsCenter(id),
      },
    ]);
  }, []);

  // Render
  return (
    <Card>
      <View className='relative items-center'>
        <LocaleText text='messages:whereDonate' className='font-bold' />
        <BaseIcon
          icon={PencilIcon}
          size={18}
          className='absolute right-0 top-[-5]'
          onPress={onEditPress}
        />
      </View>
      <View className='gap-3'>
        {favoriteDonationsCenters && favoriteDonationsCenters.length > 0 ? (
          favoriteDonationsCenters.map((donationsCenter, index) => (
            <DonationsCenterCard
              key={index}
              donationsCenter={donationsCenter}
              onBookmarkPress={handleBookmarkPress}
            />
          ))
        ) : (
          <LocaleText text='messages:addDonationsCenter' className='text-center text-sm' />
        )}
      </View>
    </Card>
  );
}

export default DonationsCentersCard;
