// React
import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';

// Components
import LocaleText from './LocaleText';

type CountdownProps = {
  targetDate: Date;
};

/**
 * Countdown component
 * @param props
 */
function Countdown({ targetDate }: CountdownProps) {
  // States
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
  });

  // Callbacks
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference > 0) {
      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)) % 30;
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      setTimeLeft({ months, days, hours });
    } else {
      setTimeLeft({ months: 0, days: 0, hours: 0 });
    }
  }, [targetDate]);

  // Effects
  useEffect(() => {
    calculateTimeLeft();

    const interval = setInterval(() => calculateTimeLeft(), 1000 * 60);
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  // Render
  return (
    <View className='flex-row justify-evenly'>
      <View className='flex-1 items-center'>
        <LocaleText text={timeLeft.months} className='text-5xl font-extrabold text-primary-500' />
        <LocaleText text='general:months' className='text-sm uppercase text-dark-300' />
      </View>
      <View className='flex-1 items-center'>
        <LocaleText text={timeLeft.days} className='text-5xl font-extrabold text-primary-500' />
        <LocaleText text='general:days' className='text-sm uppercase text-dark-300' />
      </View>
      <View className='flex-1 items-center'>
        <LocaleText text={timeLeft.hours} className='text-5xl font-extrabold text-primary-500' />
        <LocaleText text='general:hours' className='text-sm uppercase text-dark-300' />
      </View>
    </View>
  );
}

export default Countdown;
