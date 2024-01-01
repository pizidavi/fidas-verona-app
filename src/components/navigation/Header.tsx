// React
import { Pressable, View } from 'react-native';

// Components
import Logo from '../icons/Logo';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Types
import { AppNavigationProp } from '../../types/navigation';

// Others
import colors from '../../../colors';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

type HeaderProps = {
  headerRight?: React.ReactNode;
};

/**
 * Header component
 * @param props
 */
function Header({ headerRight }: HeaderProps) {
  // Hooks
  const navigation = useNavigation<AppNavigationProp>();

  // Render
  return (
    <View className='flex-row content-center items-center justify-between bg-secondary-100'>
      <View className='flex-row'>
        {navigation.canGoBack() ? (
          <Pressable className='px-2 py-3' onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={25} color={colors.secondary[500]} />
          </Pressable>
        ) : (
          <Logo />
        )}
      </View>
      <View className='flex-row justify-end'>{headerRight}</View>
    </View>
  );
}

export default Header;
