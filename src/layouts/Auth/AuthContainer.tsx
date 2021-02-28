import React, { useState } from 'react'
import { View } from 'react-native'
import { Header } from './../../components'
import { Styles } from './../../styles'
import { LogInScreen } from './../../screens'
import { ScreenLayout } from './../../types'

export const AuthContainer = () => {

    const [screenLayout, setScreenLayout] = useState<ScreenLayout>({
        title: 'Please log in',
        firstText: 'Enter your user name',
        secondText: 'Enter your password',
        noticeText: 'Don\'t have an account? Please sign up.',
        buttonTitle: 'Sign up',
        secondButtonTitle: 'Log in'
    })

    const handleLogInSignUp = (changedScreenLayout: ScreenLayout) => {
            setScreenLayout(changedScreenLayout)
    }

    return (
        <View style={Styles.screen} >
            <Header title="Study Tracker" />
            <LogInScreen changeLayout={handleLogInSignUp} layout={screenLayout} />
        </View>
    )
}