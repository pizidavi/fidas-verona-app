// React
import { Platform } from 'react-native';

// Screens
import DonationsCentersScreen from '../screens/DonationsCentersScreen';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types
import { HomeStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Home view
 */
function HomeView() {
  // Render
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        animation: Platform.select({ ios: 'ios', android: 'fade' }),
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='User' component={UserScreen} />
      <Stack.Screen name='DonationsCenters' component={DonationsCentersScreen} />
    </Stack.Navigator>
  );
}

export default HomeView;
