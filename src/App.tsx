// React
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

// Hooks
import useOnResume from './hooks/useOnResume';

// Redux
import { persistor, store } from './store';
import { Provider } from 'react-redux';

// Components
import Navigation from './components/navigation/Navigation';

// Others
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

function App() {
  // Hooks
  useOnResume();

  // Render
  return <Navigation />;
}

function Providers() {
  // Render
  return (
    <GestureHandlerRootView style={styles.main}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <StatusBar translucent backgroundColor='transparent' />
            <SafeAreaProvider>
              <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.main}>
                <App />
              </SafeAreaView>
            </SafeAreaProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1 },
});

export default Providers;
