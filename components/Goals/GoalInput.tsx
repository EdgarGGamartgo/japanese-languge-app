import React, { useState } from 'react'
import {
    View,
    TextInput,
    Button,
    Modal,
    Alert
} from 'react-native'
import { GoalInputStyles } from '../../styles/index'
import { AddGoalHandler } from './../../types/index'

export const GoalInput = ({ addGoalHandler }: AddGoalHandler) => {

    const [enteredGoal, setEnteredGoal] = useState<string>('')
    const [isModal, setIsModal] = useState<boolean>(true)
    const goalInputHandler = (enteredText: string) => {
        setEnteredGoal(enteredText)
    }

    return (
    // <Modal
    // transparent={false}
    // visible={isModal}>     
      <View style={GoalInputStyles.inputContainer}>
        <TextInput 
          value={enteredGoal}
          onChangeText={goalInputHandler}
          placeholder="Course Goal"
          style={GoalInputStyles.input}
        />
        <Button onPress={() => addGoalHandler(enteredGoal)} title="ADD"/>
      </View>
    // </Modal> 
    ) 
}
