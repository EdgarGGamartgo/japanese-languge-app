export interface Item {
    title: string
    onDelete: (goalId: string) => void
    id: string
}