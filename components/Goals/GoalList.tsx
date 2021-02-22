import React from 'react';
import { 
  FlatList
} from 'react-native';
import { GoalItem } from './GoalItem'

import { GoalListProps } from './../../types/index'

export const GoalList = ({ CourseGoals }: GoalListProps) => {

  return (
      <FlatList
        keyExtractor={(item, index) => item.myKey} 
        data={CourseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}>
      </FlatList>
  );
}
