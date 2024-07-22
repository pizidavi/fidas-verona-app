// React
import { useMemo } from 'react';

// Redux
import { useAuthStore } from '../../store';

// Views
import AuthView from '../../views/AuthView';
import UnauthView from '../../views/UnauthView';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

/**
 * Navigation component
 */
function Navigation() {
  // Global state
  const user = useAuthStore(state => state.user);

  // Memos
  const renderView = useMemo(() => {
    if (user) return <AuthView key={1} />;
    else return <UnauthView key={2} />;
  }, [user]);

  // Render
  return <NavigationContainer>{renderView}</NavigationContainer>;
}

export default Navigation;
