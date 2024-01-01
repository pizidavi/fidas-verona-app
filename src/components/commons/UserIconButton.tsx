// React
import { TouchableOpacity, View } from 'react-native';

// Utils
import { clx } from '../../utils/utils';

// Others
import colors from '../../../colors';
import { UserIcon } from 'react-native-heroicons/outline';

type UserIconButtonProps = {
  onPress?: () => void;
  className?: string;
};

/**
 * UserIcon button component
 * @param props
 */
function UserIconButton(props: UserIconButtonProps) {
  // Render
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View className={clx('aspect-square rounded-full bg-secondary-500 p-2', props.className)}>
        <UserIcon color={colors.secondary[100]} />
      </View>
    </TouchableOpacity>
  );
}

export default UserIconButton;
