// React
import { TouchableOpacity } from 'react-native';

// Utils
import { clx } from '../../utils/utils';

// Assets
import { LucideIcon, LucideProps } from 'lucide-react-native';

// Others
import colors from '../../../colors';

type BaseIconProps = {
  icon: LucideIcon;
  className?: string;
} & LucideProps;

/**
 * BaseIcon component
 * @param props
 */
function BaseIcon(props: BaseIconProps) {
  const { icon: Icon, onPress, className, size, color, ...rest } = props;

  // Render
  return (
    <TouchableOpacity activeOpacity={0.7} className={clx('p-2', className)} onPress={onPress}>
      <Icon size={size ?? 20} color={color ?? colors.dark[500]} {...rest} />
    </TouchableOpacity>
  );
}

export default BaseIcon;
