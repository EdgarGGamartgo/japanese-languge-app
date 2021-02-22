import React, { useState } from 'react';
import { 
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
  FlatList
} from 'react-native';

import { Goal } from '../../types/index'


export const InputButtonComponent = () => {

  const [enteredGoal, setEnteredGoal] = useState<string>('')
  const [courseGoals, setCourseGoals] = useState<Goal[]>([])

  const addGoalHandler = () => {
    console.log(enteredGoal)
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { myKey: Math.random().toString(), value: enteredGoal }
    ])
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
      <FlatList
        keyExtractor={(item, index) => item.myKey} 
        data={courseGoals}
        renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
      )}>
      </FlatList>
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
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 10,
    marginVertical: 10,
  }
})
