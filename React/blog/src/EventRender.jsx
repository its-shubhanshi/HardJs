import React, { useState } from "react";

const EventRender = () => {
  let [username, setUserName] = useState("Sarthak");

  let handleClick = () => {
    setUserName("Ankit");
};
console.log(username);
  return (
    <div>
      <h1>Username</h1>
      <h2 id="#h2">{username}</h2>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default EventRender;
