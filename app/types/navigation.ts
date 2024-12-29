// Navigation
import { type NavigatorScreenParams, type Route } from '@react-navigation/native';
import {
  type NativeStackNavigationProp,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';

// Types
import type { News } from './entities';

export type RootStackParamList = {
  // UnAuth
  Login: undefined;

  // Auth
  AuthView: NavigatorScreenParams<HomeStackParamList>;
};

export type HomeStackParamList = {
  HomeView: NavigatorScreenParams<BottomTabParamList>;
  DonationsCenters: undefined;
  NewsDetails: { news: News };
  Settings: undefined;
  User: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Donations: undefined;
  News: undefined;
};

export type AppRoute = Route<keyof RootStackParamList>;
export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type HomeNavigationProp = NativeStackNavigationProp<HomeStackParamList>;
export type BottomTapNavigationProp = NativeStackNavigationProp<BottomTabParamList>;

export type NewsDetailsScreenProps = NativeStackScreenProps<HomeStackParamList, 'NewsDetails'>;
