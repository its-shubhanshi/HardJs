import React from "react";

const RenderTask = (props) => {
  const tasks = props.tasks;
  const renderTask = tasks.map((task) => {
    return <li  style={{color:"yellow"}} key={task.id}>{task.title}</li>;
  });

  return (
    <>
      <div>
        <h2 style={{color:"aqua"}}>Pending Task ...</h2>
        <ol>{renderTask}</ol>
      </div>
    </> 
  );
};

export default RenderTask;
