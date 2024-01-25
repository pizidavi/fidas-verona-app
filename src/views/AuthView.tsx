// Views
import HomeView from './HomeView';

// Screens
import DonationsScreen from '../screens/DonationsScreen';

// Components
import TabBar from '../components/navigation/TabBar';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Types
import { BottomTabParamList } from '../types/navigation';

// Others
import { HomeIcon, QueueListIcon } from 'react-native-heroicons/solid';

const Tab = createBottomTabNavigator<BottomTabParamList>();

/**
 * Auth view
 */
function AuthView() {
  // Render
  return (
    <Tab.Navigator
      initialRouteName='HomeView'
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='HomeView'
        component={HomeView}
        options={{
          tabBarLabel: 'home:title',
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tab.Screen
        name='Donations'
        component={DonationsScreen}
        options={{
          tabBarLabel: 'donations:title',
          tabBarIcon: DonationsTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
}

const HomeTabBarIcon = ({ color, size }: { color: string; size: number }) => (
  <HomeIcon color={color} size={size} />
);

const DonationsTabBarIcon = ({ color, size }: { color: string; size: number }) => (
  <QueueListIcon color={color} size={size} />
);

export default AuthView;
