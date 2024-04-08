// Navigation
import { NavigatorScreenParams, Route } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

// Types
import { News } from './entities';

export type RootStackParamList = {
  // UnAuth
  Login: undefined;

  // Auth
  AuthView: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
  HomeView: NavigatorScreenParams<HomeStackParamList>;
  Donations: undefined;
  NewsView: NavigatorScreenParams<NewsStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  User: undefined;
  DonationsCenters: undefined;
};

export type NewsStackParamList = {
  News: undefined;
  NewsDetails: { news: News };
};

export type AppRoute = Route<keyof RootStackParamList>;
export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type HomeNavigationProp = NativeStackNavigationProp<HomeStackParamList>;
export type NewsNavigationProp = NativeStackNavigationProp<NewsStackParamList>;

export type NewsDetailsScreenProps = NativeStackScreenProps<NewsStackParamList, 'NewsDetails'>;
