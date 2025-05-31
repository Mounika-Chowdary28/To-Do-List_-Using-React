import React,{useState} from "react";

function MyComponent(){
  const [name,setName]=useState("Guest");
  const [age,setAge]=useState(0);
  const [isEmployeed,setEmp]=useState(false);

  const updateName=()=>{
    setName("Mounika Chowdary")
  }

  const updateAge=()=>{
    setAge(age+1);
  }
  
  const isEmp=()=>{
    setEmp(!isEmployeed);
  }

  return(<div>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={updateAge}>Increment Age</button>
     
    <p>Employee: {isEmployeed ? "Yes":"No"}</p>
    <button onClick={isEmp}>Toggle Status</button>

  </div>);
}

export default MyComponent