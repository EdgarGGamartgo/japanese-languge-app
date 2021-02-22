import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Item } from './../../types/index'
import { GoalItemStyles } from '../../styles/index'

export const GoalItem = ({ title }: Item) => {
    return (
        <View style={GoalItemStyles.listItem}>
          <Text>{title}</Text>
        </View>
    )
}
