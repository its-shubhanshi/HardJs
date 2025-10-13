import React from "react";
import "./App.css";
import { useState } from "react";
import Create from "./component/Create"
import RenderTask from "./component/Render";
const App = () => {
  let [tasks, setTasks] = useState([]);

  console.log(tasks);

  return (
    <div className="w-screen h-screen bg-gray-800 text-white
     p-10 flex">
      <Create tasks={tasks} setTasks={setTasks} />
      <RenderTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
