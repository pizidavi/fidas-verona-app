// React
import { Platform } from 'react-native';

// Views
import HomeView from './HomeView';

// Screens
import DonationsCentersScreen from '../screens/DonationsCentersScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import UserScreen from '../screens/UserScreen';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types
import { HomeStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Auth view
 */
function AuthView() {
  // Render
  return (
    <Stack.Navigator
      initialRouteName='HomeView'
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        animation: Platform.select({ ios: 'ios', android: 'fade' }),
      }}
    >
      <Stack.Screen name='HomeView' component={HomeView} />
      <Stack.Screen name='DonationsCenters' component={DonationsCentersScreen} />
      <Stack.Screen name='NewsDetails' component={NewsDetailsScreen} />
      <Stack.Screen name='User' component={UserScreen} />
    </Stack.Navigator>
  );
}

export default AuthView;
