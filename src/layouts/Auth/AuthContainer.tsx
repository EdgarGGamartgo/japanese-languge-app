import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'
import { Header } from './../../components'
import { Styles } from './../../styles'
import { LogInScreen } from './../../screens'
import { ScreenLayout, AuthProps, AuthCredentials } from './../../types'
import Spinner from 'react-native-loading-spinner-overlay';
import { axiosLogin } from './../../axios'
import { SpinnerStyles } from './../../styles'
import { RouteProp } from '@react-navigation/native';
import { initialLogInLayout } from './../../__mocks__'

export const AuthContainer = ({ navigation, route }: AuthProps) => {

    const [spinner, setSpinner] = useState<boolean>(true)

    const [screenLayout, setScreenLayout] = useState<ScreenLayout>(initialLogInLayout)

    const seeParams = () => console.log('Getting props from navigation!!!: ', route.params.userId)
    

    useEffect(() => {
        (async () =>  console.log(await axiosLogin("5")))()
    }, [])

    const handleLogInSignUp = (changedScreenLayout: ScreenLayout) => {
            setScreenLayout(changedScreenLayout)
    }

    const authRequest = (authCredentials: AuthCredentials) => {
        if (screenLayout.title === 'Please log in') {
            console.log(`Trigger log in HTTP request ${JSON.stringify(authCredentials)}`)
            // Success case: Inform user the success in logging in, show the message for 5 secs and change layout
            // to Home Screen
            // Failure case: Inform user if Bad Request due to bad credentials
            // (less than 8 characters) or error from server 
            // Note: Server is going to handle error or success cases and the mobile app
            // will just handle with UI from the server response + the error boundary components in
            // parent tree component
            navigation.navigate('Home', { userId: '2' })
        } else if (screenLayout.title === 'Please sign up') {
            console.log(`Trigger sign up HTTP request ${JSON.stringify(authCredentials)}`)
            setScreenLayout(initialLogInLayout)
            // Success case: Inform user the success in signing up, show the message for 5 secs and change layout
            // to Log In Screen
            // Failure case: Inform user if Bad Request due to already existing credentials or bad credentials
            // (less than 8 characters) or error from server
            // Note: Server is going to handle error or success cases and the mobile app
            // will just handle with UI from the server response + the error boundary components in
            // parent tree component 
        }
    }

    return (
        <View style={Styles.screen} >
            <Header title="Study Tracker" />
            <LogInScreen changeLayout={handleLogInSignUp} layout={screenLayout} authRequest={authRequest} />
            {/* <Spinner
                visible={spinner}
                color="white"
                textContent={'Loading...'}
                overlayColor="blue"
                textStyle={SpinnerStyles.spinnerTextStyle}
                /> */}
        </View>
    )
}
