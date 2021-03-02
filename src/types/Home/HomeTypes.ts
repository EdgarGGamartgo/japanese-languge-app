import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    Auth: { userId: string };
    Home: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Auth'>;
type StackParamList = {
    Auth: { userId: string };
};

export type HomeProps = {
    navigation: StackNavigationProp<StackParamList,'Auth' >;
    route: HomeScreenRouteProp
}