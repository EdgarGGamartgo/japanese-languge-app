import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { HomeProps } from './../../types'
import Spinner from 'react-native-loading-spinner-overlay';
import { SpinnerStyles } from './../../styles'

export const HomeScreen = ({ navigation, route }: HomeProps) => {

    const [spinner, setSpinner] = useState<boolean>(false)

    const seeParams = () => console.log('Getting props from HOMESCREEN!!!: ', route.params.userId)

    const logOut = () => {
        setSpinner(true)
        setTimeout(() => {
            setSpinner(false)
            navigation.navigate('Auth', { userId: '1' })
        }, 3000)
    }

    return (
        <View>
            <Text style={{ marginTop: 200 }}>HELLO HOME SCREEN</Text>
            <Button
                color="blue"
                title="Log Out"
                onPress={logOut}
            />
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