import { useState } from 'react'
import InputComponent from './inputComponent'
import ToDoComponent from './todoComponent'

function App() {
  
  const [inputVal,setinputVal]=useState('')

  const [todos,settodos]=useState([])
  function Writetodo(e){
    setinputVal(e.target.value)
  }
  function addtodo(){
     if(inputVal!=''){
      settodos((prevtodo)=>[...prevtodo,inputVal])
      setinputVal('')
     }
  }
  function delTodo(todoIdx){
    settodos((prevtodos)=>prevtodos.filter((prevtodos,prevtodoIdx)=>{
      return prevtodoIdx!=todoIdx;
    }));
  }
  return (
    <>
    <h1>To Do List</h1>
    <InputComponent inputVal={inputVal} writetodo={Writetodo} addtodo={addtodo}/>
    <ToDoComponent todos={todos} delTodo={delTodo}/>
    </>
    
  )
}

export default App
