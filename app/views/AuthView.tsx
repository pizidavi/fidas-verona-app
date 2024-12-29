// React
import { useEffect } from 'react';
import { Platform } from 'react-native';

// Views
import HomeView from './HomeView';

// Screens
import DonationsCentersScreen from '../screens/DonationsCentersScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UserScreen from '../screens/UserScreen';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types
import type { HomeStackParamList } from '../types/navigation';

// Others
import { registerNotifications } from '../services/notifications';

const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Auth view
 */
function AuthView() {
  // Effects
  useEffect(() => {
    registerNotifications();
  }, []);

  // Render
  return (
    <Stack.Navigator
      initialRouteName='HomeView'
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        animation: Platform.select({ ios: 'ios_from_right', android: 'fade' }),
      }}
    >
      <Stack.Screen name='HomeView' component={HomeView} />
      <Stack.Screen name='DonationsCenters' component={DonationsCentersScreen} />
      <Stack.Screen name='NewsDetails' component={NewsDetailsScreen} />
      <Stack.Screen name='User' component={UserScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default AuthView;
