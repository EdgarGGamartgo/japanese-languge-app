import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Styles } from './../styles'
import { ThemeProvider } from 'styled-components/native'
import { BetterButton, ButtonTheme, lightTheme, MyText, YourText, Heading, DefaultButton } from './../styles/GuessNumberStyles/guessNumbersTheme'


export const StartGameScreen = () => {
    return (
        <View style={Styles.generalScreen}>
            <BetterButton active={true}/>
            <ThemeProvider theme={ButtonTheme}>
                <Button title="Reset" onPress={() => {}} color="red" />
            </ThemeProvider>
            <DefaultButton title="Reset" onPress={() => {}}/>
            <Heading active={false}>HEADING IS WORKING</Heading>
            <YourText>MY NAME IS</YourText>
            <ThemeProvider theme={lightTheme}>
                <MyText>HELLO</MyText>                
            </ThemeProvider>
            <Text style={Styles.title}>The Game Screen!</Text>
            <View style={Styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={Styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} />
                </View>
            </View>
        </View>
    )
}