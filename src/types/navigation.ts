// Navigation
import { Route } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  // UnAuth
  Login: undefined;

  // Auth
  Home: undefined;
};

export type AppRoute = Route<keyof RootStackParamList>;
export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;
