import { useState } from "react";
import "./App.css";

function App() {
  const [name,setName]=useState("")
  const [age,setAge]=useState(10)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newUSer={uname:name, age:age}
    console.log(newUSer);
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  id="nameInput" placeholder="Enter your name"/>
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}  id="ageInput" placeholder="Enter your Age"/>
       
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
