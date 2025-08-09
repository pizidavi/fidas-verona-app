// Navigation
import { type NavigatorScreenParams, type Route } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  // UnAuth
  Login: undefined;

  // Auth
  AuthView: NavigatorScreenParams<HomeStackParamList>;
};

export type HomeStackParamList = {
  HomeView: NavigatorScreenParams<BottomTabParamList>;
  DonationsCenters: undefined;
  Settings: undefined;
  User: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Donations: undefined;
};

export type AppRoute = Route<keyof RootStackParamList>;
export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type HomeNavigationProp = NativeStackNavigationProp<HomeStackParamList>;
export type BottomTapNavigationProp = NativeStackNavigationProp<BottomTabParamList>;
