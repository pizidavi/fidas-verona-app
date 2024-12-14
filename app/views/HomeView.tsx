// Screens
import DonationsScreen from '../screens/DonationsScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';

// Components
import TabBar from '../components/navigation/TabBar';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Assets
import { AlignJustifyIcon, HomeIcon, NewspaperIcon } from 'lucide-react-native';

// Types
import type { BottomTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();

/**
 * Home view
 */
function HomeView() {
  // Render
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
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
      <Tab.Screen
        name='News'
        component={NewsScreen}
        options={{
          tabBarLabel: 'news:title',
          tabBarIcon: NewsTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
}

const HomeTabBarIcon = ({ color, size }: { color: string; size: number }) => (
  <HomeIcon color={color} size={size} />
);

const DonationsTabBarIcon = ({ color, size }: { color: string; size: number }) => (
  <AlignJustifyIcon color={color} size={size} />
);

const NewsTabBarIcon = ({ color, size }: { color: string; size: number }) => (
  <NewspaperIcon color={color} size={size} />
);

export default HomeView;
