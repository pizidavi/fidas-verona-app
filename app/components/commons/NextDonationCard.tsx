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
import { Donation, User } from '../../types/entities';

type NextDonationCardProps = {
  lastDonation: Donation;
  gender: User['gender'];
};

/**
 * NextDonationCard component
 * @param props
 */
function NextDonationCard({ lastDonation, gender }: NextDonationCardProps) {
  // Memos
  const lastDonationDate = useMemo(() => {
    return new Date(lastDonation.date);
  }, [lastDonation]);

  const nextSADonationDate = useMemo(() => {
    const date = new Date(lastDonationDate);
    date.setDate(date.getDate() + SA_DONATION_INTERVAL[gender]);
    return date;
  }, [lastDonationDate, gender]);

  const nextPLDonationDate = useMemo(() => {
    const date = new Date(lastDonationDate);
    date.setDate(date.getDate() + PL_DONATION_INTERVAL[gender]);
    return date;
  }, [lastDonationDate, gender]);

  const nextPIDonationDate = useMemo(() => {
    const date = new Date(lastDonationDate);
    date.setDate(date.getDate() + PI_DONATION_INTERVAL[gender]);
    return date;
  }, [lastDonationDate, gender]);

  // Render
  return (
    <Card className='items-center'>
      <LocaleText
        text={
          nextSADonationDate.getTime() - new Date().getTime() > 0
            ? 'messages:nextDonationIn'
            : 'messages:nextDonationSince'
        }
        className='font-bold'
      />
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
