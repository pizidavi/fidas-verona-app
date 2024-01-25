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
    <View
      className={clx('gap-3 rounded-xl bg-white p-4 shadow shadow-secondary-300', props.className)}
    >
      {props.children}
    </View>
  );
}

export default Card;
