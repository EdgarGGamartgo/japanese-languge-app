import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export const InputButtonComponent = () => {

  const [enteredGoal, setEnteredGoal] = useState<string>('')
  const [courseGoals, setCourseGoals] = useState<string[]>([])

  const addGoalHandler = () => {
    console.log(enteredGoal)
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoal])
  }

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          value={enteredGoal}
          onChangeText={goalInputHandler}
          placeholder="Course Goal"
          style={styles.input}
        />
        <Button onPress={addGoalHandler} title="ADD"/>
      </View>
      <View>
        {
          courseGoals.map((courseGoal) => <Text key={courseGoal}>{courseGoal}</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: { 
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
})
