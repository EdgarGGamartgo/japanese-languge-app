import React from 'react';
import { 
  FlatList
} from 'react-native';
import { GoalItem } from './GoalItem'

import { GoalListProps } from './../../types/index'

/**
 * @author Edgar Gabriel Martinez Gonzalez
 * 
 * @param GoalListProps: GoalListProps
 * 
 * @returns <FlatList>
 */

export const GoalList = ({ CourseGoals, removeGoal }: GoalListProps) => {

  return (
      <FlatList
        keyExtractor={(item, index) => item.myKey} 
        data={CourseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.myKey} onDelete={removeGoal} title={itemData.item.value} />}>
      </FlatList>
  );
}
