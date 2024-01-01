// React
import { useMemo } from 'react';

// Hooks
import useAppSelector from '../../hooks/useAppSelector';

// Redux
import { selectUnsafeUser } from '../../store/slices/authSlice';

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
  const user = useAppSelector(selectUnsafeUser);

  // Memos
  const renderView = useMemo(() => {
    if (user) return <AuthView key={1} />;
    else return <UnauthView key={2} />;
  }, [user]);

  // Render
  return <NavigationContainer>{renderView}</NavigationContainer>;
}

export default Navigation;
