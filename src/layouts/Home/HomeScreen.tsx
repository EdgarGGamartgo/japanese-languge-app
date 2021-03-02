import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { HomeProps } from './../../types'
import Spinner from 'react-native-loading-spinner-overlay';
import { SpinnerStyles } from './../../styles'
import { Header, InputText } from '../../components';
import { Styles } from './../../styles'
import { userData, mainMsg } from './../../__mocks__'

export const HomeScreen = ({ navigation, route }: HomeProps) => {

    const [spinner, setSpinner] = useState<boolean>(false)
    const [studiedTime, setStudiedTime] = useState<string>('0')
    const [counterTime, setCounterTime] = useState<string>('00:00:00')



    const seeParams = () => console.log('Getting props from HOMESCREEN!!!: ', route.params.userId)

    const logOut = () => {
        setSpinner(true)
        setTimeout(() => {
            setSpinner(false)
            navigation.navigate('Auth', { userId: '1' })
        }, 3000)
    }

    const addTime = (time: string) => {
        console.log(`Add time is ${time}`)
    }

    const countTime = (time: string) => {
        console.log(`Count time is ${time}`)
    }

    return (
        <View style={Styles.screen}>
            <Header title="Study Tracker" />
            <View style={Styles.generalScreen}>
            <Text style={Styles.title}>Hi {userData.name}!</Text>
            <View style={Styles.inputContainer}>
            <Text style={Styles.generalText}>{mainMsg}</Text>
                <InputText 
                    passwordType={false}
                    text={""}
                    textHandler={time => setStudiedTime(time)}
                    textValue={studiedTime}
                    placeHolder="Hours I studied today"
                />
                <View style={Styles.buttonContainer}>
                    <Button disabled={false} color="blue" title={"+ADD"} onPress={() => addTime(studiedTime)} />
                </View>
                <InputText 
                    passwordType={false}
                    text={''}
                    textHandler={time => setCounterTime(time)}
                    textValue={counterTime}
                    placeHolder="00:00:00"
                />
                <View style={Styles.buttonContainer}>
                    <Button disabled={false} color="blue" title={"Count"} onPress={() => countTime(counterTime)} />
                </View>
                <View style={{ marginBottom: 25 }}></View>

                <View style={Styles.buttonContainer}>
                    <Button disabled={false} color="blue" title={"LOG OUT"} onPress={logOut} />
                </View>
            </View>
            </View>
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