import React, { useState } from "react";

const App = () => {
  let [num, setNum] = useState(0);
  let Increment = () => {
    setNum(num+1);
  };
  let Decreement = () => {
    if (num > 0) {
      setNum(num-1);
    }
  };

  return (
    <div>
      <h1>App Page</h1>
      <h2>Count is {num}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decreement}>Decreement</button>
    </div>
  );
};

export default App;
