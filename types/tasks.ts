export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export interface ITask {
  id: string,
  text?: string,
  done?: boolean
  priority?: TaskPriority
}