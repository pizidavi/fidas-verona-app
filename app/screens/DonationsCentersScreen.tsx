// React
import { useCallback } from 'react';
import { View } from 'react-native';

// Store
import { useConfigStore, useDataStore } from '../store';

// Screens
import BaseScreen from './BaseScreen';

// Components
import DonationsCenterCard from '../components/commons/DonationsCenterCard';
import LocaleText from '../components/commons/LocaleText';
import Header from '../components/navigation/Header';

// Types
import type { DonationsCenter } from '../types/entities';

function DonationsCentersScreen() {
  // Global state
  const company = useDataStore(state => state.company);

  // Callbacks
  const handleSavePress = useCallback((id: DonationsCenter['id']) => {
    useConfigStore.getState().toggleFavoriteDonationsCenter(id);
  }, []);

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5 p-5'>
      <Header />
      <View>
        <LocaleText
          className='text-3xl font-bold capitalize text-secondary-500'
          text='messages:whereDonate'
        />
      </View>
      <View className='gap-5'>
        {company?.donationsCenters.map((donationCenter, index) => (
          <DonationsCenterCard
            key={index}
            donationsCenter={donationCenter}
            onBookmarkPress={handleSavePress}
          />
        )) ?? <LocaleText text='errors:networkRequestError' />}
      </View>
    </BaseScreen>
  );
}

export default DonationsCentersScreen;
