// React
import { useMemo } from 'react';
import { View } from 'react-native';

// Components
import Badge, { BADGE_THEME } from './Badge';
import Card from './Card';
import Countdown from './Countdown';
import LocaleText from './LocaleText';

// Config
import {
  PI_DONATION_INTERVAL,
  PL_DONATION_INTERVAL,
  SA_DONATION_INTERVAL,
} from '../../config/constants';

// Utils
import { formateDate } from '../../utils/formatters';

// Types
import { Donation } from '../../types/entities';

type NextDonationCardProps = {
  lastDonation?: Donation;
};

/**
 * NextDonationCard component
 * @param props
 */
function NextDonationCard({ lastDonation }: NextDonationCardProps) {
  // Memos
  const lastDonationDate = useMemo(() => {
    if (!lastDonation) return undefined;
    return new Date(lastDonation.date);
  }, [lastDonation]);

  const nextSADonationDate = useMemo(() => {
    if (!lastDonationDate) return new Date();

    const date = new Date(lastDonationDate);
    date.setDate(date.getDate() + SA_DONATION_INTERVAL);
    return date;
  }, [lastDonationDate]);

  const nextPLDonationDate = useMemo(() => {
    if (!lastDonationDate) return new Date();

    const date = new Date(lastDonationDate);
    date.setDate(date.getDate() + PL_DONATION_INTERVAL);
    return date;
  }, [lastDonationDate]);

  const nextPIDonationDate = useMemo(() => {
    if (!lastDonationDate) return new Date();

    const date = new Date(lastDonationDate);
    date.setDate(date.getDate() + PI_DONATION_INTERVAL);
    return date;
  }, [lastDonationDate]);

  // Render
  return (
    <Card className='items-center'>
      <LocaleText text='messages:nextDonation' className='font-bold' />
      <Countdown targetDate={nextSADonationDate} />
      <View className='gap-2'>
        <View className='flex-row gap-2'>
          <Badge theme={BADGE_THEME.SA} className='min-w-11' />
          <LocaleText text={formateDate(nextSADonationDate)} />
        </View>
        <View className='flex-row gap-2'>
          <Badge theme={BADGE_THEME.PL} className='min-w-11' />
          <LocaleText text={formateDate(nextPLDonationDate)} />
        </View>
        <View className='flex-row gap-2'>
          <Badge theme={BADGE_THEME.PI} className='min-w-11' />
          <LocaleText text={formateDate(nextPIDonationDate)} />
        </View>
      </View>
    </Card>
  );
}

export default NextDonationCard;
