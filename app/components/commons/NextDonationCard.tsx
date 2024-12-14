// React
import { useMemo } from 'react';
import { Text, View } from 'react-native';

// Components
import Badge, { BADGE_THEME } from './Badge';
import Card from './Card';
import Countdown from './Countdown';
import LocaleText from './LocaleText';

// Utils
import { formateDate } from '../../utils/formatters';
import { getNextDonationDate } from '../../utils/utils';

// Types
import type { Donation, User } from '../../types/entities';

type NextDonationCardProps = {
  donations: Donation[];
  gender: User['gender'];
};

/**
 * NextDonationCard component
 * @param props
 */
function NextDonationCard({ donations, gender }: NextDonationCardProps) {
  // Memos
  const { nextPLDonationDate, nextSADonationDate } = useMemo(
    () => getNextDonationDate(donations, gender),
    [donations, gender],
  );

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
        values={{ type: 'general:blood' }}
        components={[<Text key='0' className='text-primary-500' />]}
      />
      <Countdown targetDate={nextSADonationDate} />
      <View className='gap-2'>
        <View className='flex-row gap-2'>
          <Badge theme={BADGE_THEME.SA} className='min-w-11' />
          <LocaleText text={formateDate(nextSADonationDate)} avoidTranslation />
        </View>
        <View className='flex-row gap-2'>
          <Badge theme={BADGE_THEME.PL} className='min-w-11' />
          <LocaleText text={formateDate(nextPLDonationDate)} avoidTranslation />
        </View>
      </View>
    </Card>
  );
}

export default NextDonationCard;
