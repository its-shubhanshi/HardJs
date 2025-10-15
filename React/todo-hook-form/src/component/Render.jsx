import React from "react";

const RenderTask = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const deleteHandler = (id) => {
    console.log("Delete", id);
    const filterTodo = todos.filter((task) => task.id != id);
    setTodos(filterTodo);
  };
  const renderTask = todos.map((task) => {
    return (
      <li
        className="mb-2 flex justify-between items-center p-4 bg-gray-900 rounded"
        key={task.id}
      >
        <span className="text=xl font-thin">{task.title}</span>
        <button
          className="text-sm font-thin text-red-400"
          onClick={() => deleteHandler(task.id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className="w-[40%] p-10">
      <h1 className="mb-10 text-5xl font-thin text-pink-600">
        Pending Task ...
      </h1>
      <ol>{renderTask}</ol>
    </div>
  );
};

export default RenderTask;
