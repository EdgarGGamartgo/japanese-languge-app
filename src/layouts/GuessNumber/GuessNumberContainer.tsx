import React from 'react'
import { View } from 'react-native'
import { Styles } from './../../styles'
import { Header } from './../../components/index'
//import { LogInScreen } from './../../screens'

export const GuessNumberContainer = () => {
    return (
        <View style={Styles.screen} >
            <Header title="Guess a number" />
            {/* <LogInScreen/> */}
        </View>
    )
}