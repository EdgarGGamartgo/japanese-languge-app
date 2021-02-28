import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Styles } from './../styles'
import { InputText } from './../components'
import { AuthTitle } from './../types'

export const LogInScreen = ({ title }: AuthTitle) => {

    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const logIn = () => {
        console.log(`userName is: ${userName} and password is ${password}`)
    }

    return (
        <View style={Styles.generalScreen}>
            <Text style={Styles.title}>{title}</Text>
            <View style={Styles.inputContainer}>
                <InputText 
                    text="Enter your user name:"
                    textHandler={text => setUserName(text)}
                    textValue={userName}
                    placeHolder="Username"
                />
                <InputText 
                    text="Enter your user password:"
                    textHandler={text => setPassword(text)}
                    textValue={password}
                    placeHolder="Password"
                />
                <View style={Styles.buttonContainer}>
                    <Button color="blue" title="Log in" onPress={logIn} />
                </View>
            </View>
        </View>
    )
}