const MapRender = () => {
    const profiles=[
        {name:"Sarthak",age:12},
        {name:"Ankur",age:54},
        {name:"Akarsh",age:18},
    ];
    let updatedData=profiles.map((profile,index)=>{
        return(
            <li key={index}>
            <span>Name : {profile.name}</span> ,  
            <span>Age : {profile.age}</span>
        </li>
        )
        
    })

  return (
    <div>
    <ol>{updatedData}</ol>
    </div>
  )
}

export default MapRender