// React
import { View } from 'react-native';

// Components
import BaseIcon from '../commons/BaseIcon';
import Logo from '../icons/Logo';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Assets
import { ChevronLeftIcon } from 'lucide-react-native';

// Types
import type { AppNavigationProp } from '../../types/navigation';

// Others
import colors from '../../../colors';

type HeaderProps = {
  back?: boolean;
  headerRight?: React.ReactNode;
};

/**
 * Header component
 * @param props
 */
function Header({ back, headerRight }: HeaderProps) {
  // Hooks
  const navigation = useNavigation<AppNavigationProp>();
  const canGoBack = back ?? navigation.canGoBack();

  // Render
  return (
    <View className='flex-row content-center items-center justify-between bg-secondary-100'>
      <View className='flex-row'>
        {canGoBack ? (
          <BaseIcon
            icon={ChevronLeftIcon}
            size={25}
            color={colors.secondary[500]}
            onPress={() => navigation.goBack()}
          />
        ) : (
          <Logo />
        )}
      </View>
      <View className='flex-row justify-end'>{headerRight ?? (canGoBack && <Logo />)}</View>
    </View>
  );
}

export default Header;
