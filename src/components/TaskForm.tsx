import { ChangeEvent, FormEvent, useState } from "react";
import { createTaskRequest } from "../api/task";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createTaskRequest(task);
    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          type="text"
          name="title"
          placeholder="Write a title"
          onChange={handleChange}
        />

        <textarea
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Write a description"
          name="description"
          rows={3}
          onChange={handleChange}
        ></textarea>

        <select
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          name="priority"
          onChange={handleChange}
          defaultValue=""
        >
          <option disabled={true} value="">
            --Choose an option--
          </option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
        {/* <label htmlFor="" className="inline-flex items-center gap-x-2">
          <input type="checkbox" className="h-5 w-5 text-indigo-600" />
          <span>Done</span>
        </label> */}
        <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
