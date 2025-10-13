import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const tasks = props.tasks;
  const setTasks = props.setTasks;
  let [title, setTitle] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: nanoid(5),
      title: title,
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  return (
    <div className="w-[60%] p-10">
      <h1 className="mb-10 text-5xl font-thin">
        Set <span className="text-red-500">Reminders</span>
      </h1>
      <form onSubmit={submithandler}>
        <input
          className="border-b w-full font-thin text-2xl p-2 outline-0"
          type="text"
          id="title"
          required
          placeholder="Enter your task ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="text-xl px-10 py-2 mt-8 border rounded"
          type="submit"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default Create;
