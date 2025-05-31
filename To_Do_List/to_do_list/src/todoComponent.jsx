import Todo from './todo'
function ToDoComponent({todos,delTodo}){
    return(
        <div className="Conatiner">
            
         {todos.map((todo,index)=>{
        return (
            <Todo todo={todo} index={index} delTodo={delTodo}/>
        )
})}
        </div>
    )
}

export default ToDoComponent