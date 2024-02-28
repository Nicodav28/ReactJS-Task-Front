import React from "react";
import { Task } from "../interfaces/task.interfaces";

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  return (
    <div key={task._id}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>
        <strong>{task.priority}</strong>
      </p>
      <p>
        <strong>{task.status}</strong>
      </p>
    </div>
  );
}

export default TaskItem;
