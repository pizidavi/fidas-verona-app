// React
import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

/**
 * Execute the `callback` when the app returns to the foreground from the background.
 *
 * The hook not triggers a re-render
 * @param effect Effect callback
 * @param deps Dependencies
 */
function useOnForegroundEffect(effect: () => void, deps: any[] = []) {
  // Reference
  const appState = useRef(AppState.currentState);

  // Effects
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      )
        effect?.();
      appState.current = nextAppState;
    });

    return () => subscription.remove();
  }, deps);
}

export default useOnForegroundEffect;
