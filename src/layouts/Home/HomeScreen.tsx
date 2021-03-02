import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeProps } from './../../types'

export const HomeScreen = ({ navigation, route }: HomeProps) => {

    const seeParams = () => console.log('Getting props from HOMESCREEN!!!: ', route.params.userId)

    return (
        <View>
            <Text style={{ marginTop: 200 }}>HELLO HOME SCREEN</Text>
            <Button
                color="blue"
                title="Log Out"
                onPress={() => navigation.navigate('Auth', { userId: '1' })}
            />
        </View>
    )
}