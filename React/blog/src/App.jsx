import './App.css'
import EventRender from './EventRender';
import MapRender from './MapRender';

function App() {
  let n=1;
  let str="Prachi";
  let b=true;
  let nu=null;
  let un=undefined;
  let arr=["hello",12,undefined,null,true,false,"Prachi"]
  //let obj={name:"Sarthak",age:20}

  return (
    <div>
      <h1>DataTypes </h1>
      <h2>Number : {n}</h2>
      <h2>String : {str}</h2>
      <h2>Boolean : {b?"Hello":"not hello"}</h2>
      <h2>Null : {nu}</h2>
      <h2>Undefined : {un}</h2>
      <h2>Array : {arr}</h2>

      <MapRender/>
      <EventRender/>
      
    
    </div>
  )
}

export default App
