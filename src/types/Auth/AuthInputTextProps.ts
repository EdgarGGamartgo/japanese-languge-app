import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export interface AuthInputTextProps {
    passwordType: boolean
    text: string
    textHandler: (text: string) => void
    textValue: string
    placeHolder: string
}

export interface ScreenLayout {
    title: string
    firstText: string
    secondText: string
    noticeText: string
    buttonTitle: string
    secondButtonTitle: string
}

export interface AuthCredentials {
    name: string
    password: string
}

export interface AuthLayout {
    authRequest: (authCredentials: AuthCredentials) => void
    layout: ScreenLayout
    changeLayout: (layout: ScreenLayout) => void
}

type RootStackParamList = {
    Auth: { userId: string };
    Home: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type StackParamList = {
    Home: { userId: string };
};



export interface AuthProps  {
    navigation: StackNavigationProp<StackParamList, 'Home' >;
    route: HomeScreenRouteProp
}


