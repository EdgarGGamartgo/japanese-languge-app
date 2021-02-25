import React from 'react'
import { View } from 'react-native'
import { Styles } from './../../styles'
import { Header } from './../../components/index'
import { StartGameScreen } from './../../screens'

export const GuessNumberContainer = () => {
    return (
        <View style={Styles.screen} >
            <Header title="Guess a number" />
            <StartGameScreen/>
        </View>
    )
}