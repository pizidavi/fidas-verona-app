// Screens
import LoginScreen from '../screens/LoginScreen';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * UnAuth view
 */
function UnauthView() {
  // Render
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default UnauthView;
