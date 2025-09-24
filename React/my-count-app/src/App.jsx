import React, { useState } from "react";

const App = () => {
  let [num, setNum] = useState(0);
  let Increment = () => {
    ++num;
    setNum(num);
  };
  let Decreement = () => {
    if (num > 0) {
      num--;
      setNum(num);
    }
  };
  console.log(num);

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
