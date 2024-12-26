// React
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

// Hooks
import useOnResume from './hooks/useOnResume';

// Api
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Components
import Navigation from './components/navigation/Navigation';

// Others
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        <StatusBar translucent backgroundColor='transparent' />
        <SafeAreaProvider>
          <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.main}>
            <App />
          </SafeAreaView>
        </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1 },
});

export default Providers;
