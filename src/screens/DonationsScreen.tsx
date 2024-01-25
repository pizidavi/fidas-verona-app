// React
import { useMemo } from 'react';
import { View } from 'react-native';

// Hooks
import useAppSelector from '../hooks/useAppSelector';

// Redux
import { selectUser } from '../store/slices/authSlice';

// Screens
import BaseScreen from './BaseScreen';

// Components
import Badge, { BADGE_THEME } from '../components/commons/Badge';
import Card from '../components/commons/Card';
import LocaleText from '../components/commons/LocaleText';
import Header from '../components/navigation/Header';

// Utils
import { formateDate } from '../utils/formatters';

function DonationsScreen() {
  // Global states
  const user = useAppSelector(selectUser);

  // Memos
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const donationsInCurrentYear = useMemo(
    () =>
      user.donations.filter(donation => new Date(donation.date).getFullYear() === currentYear)
        .length,
    [user.donations],
  );

  // Render
  return (
    <BaseScreen as='scroll' className='gap-5'>
      <Header back={false} />
      <View>
        <LocaleText
          className='text-3xl font-extrabold capitalize text-secondary-500'
          text='donations:title'
        />
      </View>
      <View className='flex-row gap-2'>
        <Card className='aspect-square flex-1 justify-center bg-secondary-500'>
          <LocaleText
            text='general:totals'
            className='text-2xl font-bold uppercase text-secondary-300'
          />
          <LocaleText text={user.donations_count} className='text-4xl font-extrabold text-white' />
        </Card>
        <Card className='aspect-square flex-1 justify-center bg-secondary-300'>
          <LocaleText
            text={['general:in', currentYear]}
            className='text-2xl font-bold uppercase text-secondary-500'
          />
          <LocaleText
            text={donationsInCurrentYear}
            className='text-4xl font-extrabold text-white'
          />
        </Card>
      </View>
      <View className='gap-2'>
        <LocaleText text='donations:donationsHistory' className='text-lg font-bold' />
        {user.donations.reverse().map(donation => (
          <View key={donation.date} className='flex-row gap-2'>
            <Badge
              theme={
                donation.type === 'SA'
                  ? BADGE_THEME.SA
                  : donation.type === 'PL'
                    ? BADGE_THEME.PL
                    : BADGE_THEME.PI
              }
              className='min-w-11'
            />
            <LocaleText text={formateDate(donation.date)} />
          </View>
        ))}
        <LocaleText
          text='donations:oldDonationsWarning'
          className='text-center text-sm text-dark-300'
        />
      </View>
    </BaseScreen>
  );
}

export default DonationsScreen;