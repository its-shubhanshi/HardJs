import './App.css'

function App() {
  let n=1;
  let str="Prachi";
  let b=true;
  let nu=null;
  let un=undefined;
  let arr=["hello",12,undefined,null,true,false,"Prachi",<h1>Hey</h1>]
  let obj={name:"Sarthak",age:20}

  return (
    <div>
      <h1>DataTypes </h1>
      <h2>Number : {n}</h2>
      <h2>String : {str}</h2>
      <h2>Boolean : {b?"Hello":"not hello"}</h2>
      <h2>Null : {nu}</h2>
      <h2>Undefined : {un}</h2>
      <h2>Array : {arr}</h2>
      <h2>Object : {obj.name}</h2>
      <h2>Object : {obj.age}</h2>
    
    </div>
  )
}

export default App
