// React
import { useCallback } from 'react';
import { View } from 'react-native';

// Hooks
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';

// Redux
import { selectCompany, toggleFavoriteDonationsCenter } from '../store/slices/configSlice';

// Screens
import BaseScreen from './BaseScreen';

// Components
import DonationsCenterCard from '../components/commons/DonationsCenterCard';
import LocaleText from '../components/commons/LocaleText';
import Header from '../components/navigation/Header';

// Types
import { DonationsCenter } from '../types/entities';

function DonationsCentersScreen() {
  // Hooks
  const dispatch = useAppDispatch();

  // Global state
  const company = useAppSelector(selectCompany);

  // Callbacks
  const handleSavePress = useCallback((id: DonationsCenter['id']) => {
    dispatch(toggleFavoriteDonationsCenter(id));
  }, []);

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5 p-5'>
      <Header />
      <View>
        <LocaleText
          className='text-3xl font-extrabold capitalize text-secondary-500'
          text='messages:whereDonate'
        />
      </View>
      <View className='gap-5'>
        {company.donationsCenters.map((donationCenter, index) => (
          <DonationsCenterCard
            key={index}
            donationsCenter={donationCenter}
            onBookmarkPress={handleSavePress}
          />
        ))}
      </View>
    </BaseScreen>
  );
}

export default DonationsCentersScreen;
