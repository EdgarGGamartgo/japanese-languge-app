import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import  { 
  GoalInput,
  GoalList
} from '../index'
import { GoalSettingStyles } from '../../styles/index'
import { Goal } from '../../types/index'

export const GoalSetting = () => {

  const [courseGoals, setCourseGoals] = useState<Goal[]>([])

  const addGoalHandler = (enteredGoal: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { myKey: Math.random().toString(), value: enteredGoal }
    ])
  }

  const removeGoal = (goalId: string) => {
    setCourseGoals(prevGoals => {
      return prevGoals.filter(goal => goal.myKey !== goalId)
    })
  }

  return (
    <View style={GoalSettingStyles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <GoalList removeGoal={removeGoal} CourseGoals={courseGoals}/>
    </View>
  );
}
