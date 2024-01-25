// Navigation
import { NavigatorScreenParams, Route } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  // UnAuth
  Login: undefined;

  // Auth
  AuthView: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
  HomeView: NavigatorScreenParams<HomeStackParamList>;
  Donations: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  User: undefined;
};

export type AppRoute = Route<keyof RootStackParamList>;
export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type HomeNavigationProp = NativeStackNavigationProp<HomeStackParamList>;
