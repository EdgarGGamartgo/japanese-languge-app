import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Header } from './../../components'
import { Styles } from './../../styles'
import { LogInScreen } from './../../screens'
import { ScreenLayout } from './../../types'
import Spinner from 'react-native-loading-spinner-overlay';
import { axiosLogin } from './../../axios'
import { SpinnerStyles } from './../../styles'

export const AuthContainer = () => {

    const [spinner, setSpinner] = useState<boolean>(true)

    const [screenLayout, setScreenLayout] = useState<ScreenLayout>({
        title: 'Please log in',
        firstText: 'Enter your user name',
        secondText: 'Enter your password',
        noticeText: 'Don\'t have an account? Please sign up.',
        buttonTitle: 'Sign up',
        secondButtonTitle: 'Log in'
    })

    useEffect(() => {
      (async () =>  console.log(await axiosLogin("5")))()
    }, [])

    const handleLogInSignUp = (changedScreenLayout: ScreenLayout) => {
            setScreenLayout(changedScreenLayout)
    }

    return (
        <View style={Styles.screen} >
            <Header title="Study Tracker" />
            <LogInScreen changeLayout={handleLogInSignUp} layout={screenLayout} />
            <Spinner
                visible={spinner}
                color="white"
                textContent={'Loading...'}
                overlayColor="blue"
                textStyle={SpinnerStyles.spinnerTextStyle}
                />
        </View>
    )
}
