import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Item } from '../../types/index'
import { GoalItemStyles } from '../../styles/index'

export const GoalItem = ({ id, title, onDelete }: Item) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)} >
        <View style={GoalItemStyles.listItem}>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    )
}
