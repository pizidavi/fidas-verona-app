// Views
import HomeView from './HomeView';
import NewsView from './NewsView';

// Screens
import DonationsScreen from '../screens/DonationsScreen';

// Components
import TabBar from '../components/navigation/TabBar';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Assets
import { AlignJustifyIcon, HomeIcon, NewspaperIcon } from 'lucide-react-native';

// Types
import { BottomTabParamList } from '../types/navigation';

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
      <Tab.Screen
        name='NewsView'
        component={NewsView}
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

export default AuthView;
