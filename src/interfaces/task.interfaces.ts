import { Priority } from "../enum/task-priority.enum";
import { TaskStatus } from "../enum/task-status.enum";

export interface Task{
    _id?: string;
    title: string;
    description: string;
    priority?: Priority;
    status?: TaskStatus;
    created_at?: Date;
    updated_at?: Date;
}

export type CreateTask = Omit<Task, '_id' | 'created_at' | 'updated_at'>;
