// React
import { Platform } from 'react-native';

// Screens
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import NewsScreen from '../screens/NewsScreen';

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types
import { NewsStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<NewsStackParamList>();

/**
 * News view
 */
function NewsView() {
  // Render
  return (
    <Stack.Navigator
      initialRouteName='News'
      screenOptions={{
        headerShown: false,
        animation: Platform.select({ ios: 'ios', android: 'fade' }),
      }}
    >
      <Stack.Screen name='News' component={NewsScreen} />
      <Stack.Screen name='NewsDetails' component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
}

export default NewsView;
