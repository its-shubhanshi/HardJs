import React from "react";
import "./App.css";
import { useState } from "react";
import Create from "./component/Create";
import Render from "./component/Render";
const App = () => {
  let [todos, setTodos] = useState([]);

  return (
    <div
      className="w-[100%] h-[100%] bg-gray-800 text-white
     p-10 flex"
    >
      <Create todos={todos} setTodos={setTodos} />
      <Render todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
