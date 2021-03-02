import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GeneralError, GeneralErrorUI } from './src/ErrorBoundaries'
import  { 
  AuthContainer,
  HomeScreen
} from './src/layouts'

const Stack = createStackNavigator();

export default function App() {

  return (

     <GeneralError title="Something went wrong" fallbackUI={GeneralErrorUI} >
       <>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Auth"
              component={AuthContainer}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
      </>
     </GeneralError>
  );
  
}
