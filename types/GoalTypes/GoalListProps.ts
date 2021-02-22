import { Goal } from './Goal'

export interface GoalListProps {
    CourseGoals: Goal[]
    removeGoal: (goalId: string) => void 
}