import { CreateTask } from "../interfaces/task.interfaces";

const API_ENDPOINT = 'http://localhost:3000/api'; 

export const createTaskRequest = async (task: CreateTask) => 
    await fetch(`${API_ENDPOINT}/tasks/create`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    });

export const getAllTasks = async () => 
    await fetch(`${API_ENDPOINT}/tasks`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });