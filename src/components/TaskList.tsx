import { useEffect, useState } from "react";
import { getAllTasks } from "../api/task";
import { Task } from "../interfaces/task.interfaces";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTask] = useState<Task[]>([]);

  useEffect(() => {
    getAllTasks()
      .then((response) => response.json())
      .then((data) => setTask(data));
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TaskList;
