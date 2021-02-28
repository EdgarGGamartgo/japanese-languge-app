import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { Styles } from './../styles'
import { InputText } from './../components'
import { AuthLayout, AuthCredentials } from './../types'

export const LogInScreen = ({ changeLayout, layout = {
    title: 'Please log in',
    firstText: 'Enter your user name',
    secondText: 'Enter your password',
    noticeText: 'Don\'t have an account? Please sign up.',
    buttonTitle: 'Sign up',
    secondButtonTitle: 'Log in'
} }: AuthLayout) => {

    // General Error Boundary Test
    // useEffect(() => {
    //     throw new Error('ANOTHER SUPER HUGE ERROR!!!')
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

    const authRequest = () => {
        console.log(`userName is: ${authCredentials.name} and password is ${authCredentials.password}`)
        if (layout.title === 'Please log in') {
            console.log(`Trigger log in HTTP request`)
            // Success case: Inform user the success in logging in, show the message for 5 secs and change layout
            // to Home Screen
            // Failure case: Inform user if Bad Request due to bad credentials
            // (less than 8 characters) or error from server 
            // Note: Server is going to handle error or success cases and the mobile app
            // will just handle with UI from the server response + the error boundary components in
            // parent tree component
        } else if (layout.title === 'Please sign up') {
            console.log(`Trigger sign up HTTP request`)
            // Success case: Inform user the success in signing up, show the message for 5 secs and change layout
            // to Log In Screen
            // Failure case: Inform user if Bad Request due to already existing credentials or bad credentials
            // (less than 8 characters) or error from server
            // Note: Server is going to handle error or success cases and the mobile app
            // will just handle with UI from the server response + the error boundary components in
            // parent tree component 
        }
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
                    <Button color="blue" title={layout.secondButtonTitle} onPress={authRequest} />
                </View>
                <Text style={{ marginTop: 20, marginBottom: 15 }}>{layout.noticeText}</Text>
                <View style={Styles.buttonContainer}>
                    <Button color="blue" title={layout.buttonTitle} onPress={handleLayout} />
                </View>
            </View>
        </View>
    )
}