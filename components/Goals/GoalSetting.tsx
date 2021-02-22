import React, { useState } from 'react';
import { View } from 'react-native';
import  { 
  GoalInput,
  GoalList
} from './../index'
import { GoalSettingStyles } from '../../styles/index'
import { Goal } from './../../types/index'

export const GoalSetting = () => {

  const [courseGoals, setCourseGoals] = useState<Goal[]>([])

  const addGoalHandler = (enteredGoal: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { myKey: Math.random().toString(), value: enteredGoal }
    ])
  }

  return (
    <View style={GoalSettingStyles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <GoalList CourseGoals={courseGoals}/>
    </View>
  );
}
