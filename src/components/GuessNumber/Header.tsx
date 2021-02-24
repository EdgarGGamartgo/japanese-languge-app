import React from 'react'
import { View, Text } from 'react-native'
import { Styles } from './../../styles/index'
import { HeaderProps } from './../../types/index'

export const Header = ({ title }: HeaderProps) => {
    return (
        <View style={Styles.header}>
            <Text style={Styles.headerTitle} >{title}</Text>
        </View>
    )
}
