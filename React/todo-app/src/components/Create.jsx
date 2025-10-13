import React from "react";
import { useState } from "react";
import {nanoid} from "nanoid";

const Create = (props) => {
    const tasks=props.tasks;
    const setTasks=props.setTasks;
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
    const buttonCss={
        color:"white",
        padding:"5px 20px",
        backgroundColor:"green",
        border:"1px solid white"
    }

  return (
    <>
      <h2>Create Task</h2>
      <form onSubmit={submithandler}>
        <input
          type="text"
          id="title"
          placeholder="Enter your task ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <button style={buttonCss} type="submit">Add task</button>
        <br />
        <br />
      </form>
      <hr />
    </>
  );
};

export default Create;
