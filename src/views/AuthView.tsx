// React
import { Platform } from 'react-native';

// Screens
import HomeScreen from '../screens/HomeScreen';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Auth view
 */
function AuthView() {
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
    </Stack.Navigator>
  );
}

export default AuthView;
