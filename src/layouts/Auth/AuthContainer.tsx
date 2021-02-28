import React from 'react'
import { View } from 'react-native'
import { Header } from './../../components'
import { Styles } from './../../styles'
import { LogInScreen } from './../../screens'

export const AuthContainer = () => {
    return (
        <View style={Styles.screen} >
            <Header title="Study Tracker" />
            <LogInScreen title="Plese log in"/>
        </View>
    )
}