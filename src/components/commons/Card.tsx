// React
import { ReactNode } from 'react';
import { View } from 'react-native';

// Utils
import { clx } from '../../utils/utils';

type CardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Card component
 * @param props
 */
function Card(props: CardProps) {
  // Render
  return (
    <View className={clx('items-center gap-3 rounded-3xl bg-white p-4 shadow', props.className)}>
      {props.children}
    </View>
  );
}

export default Card;
