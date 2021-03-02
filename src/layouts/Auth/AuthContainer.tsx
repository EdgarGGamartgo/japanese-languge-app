import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'
import { Header } from './../../components'
import { Styles } from './../../styles'
import { LogInScreen } from './../../screens'
import { ScreenLayout, AuthProps, AuthCredentials } from './../../types'
import { axiosLogin } from './../../axios'
import Spinner from 'react-native-loading-spinner-overlay';
import { SpinnerStyles } from './../../styles'
import { initialLogInLayout } from './../../__mocks__'
import { GeneralErrorUI } from './../../ErrorBoundaries'

export const AuthContainer = ({ navigation, route }: AuthProps) => {

    const [spinner, setSpinner] = useState<boolean>(false)
    const [serverError, setServerError] = useState<boolean>(false)
    const [screenLayout, setScreenLayout] = useState<ScreenLayout>(initialLogInLayout)

    const seeParams = () => console.log('Getting props from navigation!!!: ', route.params.userId)
    

    useEffect(() => {
        (async () =>  console.log(await axiosLogin("5")))()
    }, [])

    const handleLogInSignUp = (changedScreenLayout: ScreenLayout) => {
            setScreenLayout(changedScreenLayout)
    }

    const authRequest = (authCredentials: AuthCredentials) => {
        setServerError(false)
        if (screenLayout.title === 'Please log in') {
            console.log(`Trigger sign up HTTP request ${JSON.stringify(authCredentials)}`)
            // Success case: Inform user the success in logging in, show the message for 5 secs and change layout
            // to Home Screen
            try {
                // setSpinner(true)
                // setTimeout(() => {
                // setSpinner(false)
                // navigation.navigate('Home', { userId: '2' })
                // }, 3000)
                throw new Error('Error when logging in!!!')
            } catch (e) {
                console.log(`Error when logging in ${e}`)
                setServerError(true)
            }
            // Failure case: Inform user if Bad Request due to bad credentials
            // (less than 8 characters) or error from server 
            // Note: Server is going to handle error or success cases and the mobile app
            // will just handle with UI from the server response + the error boundary components in
            // parent tree component
        } else if (screenLayout.title === 'Please sign up') {
            try {
                // setSpinner(true)
                // setTimeout(() => {
                // setSpinner(false)
                // setScreenLayout(initialLogInLayout)
                // }, 3000)
                throw new Error('Error when signing in!!!')
            } catch (e) {
                console.log(`Error when signing in ${e}`)
                setServerError(true)
            }
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
        <>
        {
            !serverError
            ? <View style={Styles.screen} >
                <Header title="Study Tracker" />
                <LogInScreen changeLayout={handleLogInSignUp} layout={screenLayout} authRequest={authRequest} />
                <Spinner
                    visible={spinner}
                    color="white"
                    textContent={'Loading...'}
                    overlayColor="blue"
                    textStyle={SpinnerStyles.spinnerTextStyle}
                />
            </View>
            : <GeneralErrorUI title={screenLayout.title === 'Please log in' ? 'Error when logging in' : 'Error when signing up'}/>
        }
        </>
    )
}
