import React from "react";
import "./App.css";
import { useState } from "react";
import Create from "./components/Create";
import RenderTask from "./components/RenderTask";
const App = () => {
  let [tasks, setTasks] = useState([]);
  
  console.log(tasks);
 
  return (
    <>
      <h1>TODO APP</h1>
      <Create tasks={tasks} setTasks={setTasks}/>
      <RenderTask tasks={tasks} setTasks={setTasks}/>
    </>
  );
};

export default App;
