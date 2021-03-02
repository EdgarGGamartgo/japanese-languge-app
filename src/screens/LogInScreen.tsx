import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { Styles } from './../styles'
import { InputText } from './../components'
import { AuthLayout, AuthCredentials } from './../types'

export const LogInScreen = ({ changeLayout, authRequest, layout = {
    title: 'Please log in',
    firstText: 'Enter your user name',
    secondText: 'Enter your password',
    noticeText: 'Don\'t have an account? Please sign up.',
    buttonTitle: 'Sign up',
    secondButtonTitle: 'Log in'
} }: AuthLayout) => {

    // General Error Boundary Test
    // useEffect(() => {
    //     throw new Error('ANOTHER SUPER HUGE JUST AN!!!')
    // }, [])

    const [authCredentials, setAuthCredentials] = useState<AuthCredentials>({
        name: '',
        password: ''
    });

    const resetAuthCredentials = () => {
        setAuthCredentials((prevState) => ({
            ...prevState,
            name: '',
            password: ''
        }))
    }

    const handleLayout= () => {
        resetAuthCredentials()
        if (layout.title === 'Please log in') {
            changeLayout({
                title: 'Please sign up',
                firstText: 'Enter a new user name',
                secondText: 'Enter a new password',
                noticeText: 'Already have an account? Please log in.',
                buttonTitle: 'Log in',
                secondButtonTitle: 'Sign up'
            })
        } else if (layout.title === 'Please sign up') {
            changeLayout({
                title: 'Please log in',
                firstText: 'Enter your user name',
                secondText: 'Enter your password',
                noticeText: 'Don\'t have an account? Please sign up.',
                buttonTitle: 'Sign up',
                secondButtonTitle: 'Log in'
            })
        }
    }

    const handleName = (name: string) => {
        console.log("Whats on? ", name)
        setAuthCredentials((prevState) => ({
            ...prevState,
            name
        }))
    }

    const handlePassword = (password: string) => {
        console.log("Whats on password? ", password)
        setAuthCredentials((prevState) => ({
            ...prevState,
            password
        }))
    }

    return (
        <View style={Styles.generalScreen}>
            <Text style={Styles.title}>{layout.title}</Text>
            <View style={Styles.inputContainer}>
                <InputText 
                    text={layout.firstText}
                    textHandler={name => handleName(name)}
                    textValue={authCredentials.name}
                    placeHolder="Username"
                />
                <InputText 
                    text={layout.secondText}
                    textHandler={password => handlePassword(password)}
                    textValue={authCredentials.password}
                    placeHolder="Password"
                />
                <View style={Styles.buttonContainer}>
                    <Button color="blue" title={layout.secondButtonTitle} onPress={() => authRequest(authCredentials)} />
                </View>
                <Text style={{ marginTop: 20, marginBottom: 15 }}>{layout.noticeText}</Text>
                <View style={Styles.buttonContainer}>
                    <Button color="blue" title={layout.buttonTitle} onPress={handleLayout} />
                </View>
            </View>
        </View>
    )
}