import { Task } from "../interfaces/task.interfaces";

const API_ENDPOINT = 'http://localhost:3000/tasks'; 

export const createTaskRequest = (task: Task) => 
    fetch(`${API_ENDPOINT}/create`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    });