
function Todo({todo,index,delTodo}){
    return(
        <div className="todoCon">
                <p>{todo}</p>
                <input type="checkbox"></input>
                <button onClick={()=>delTodo(index)}>delete</button>
            </div>

    )
}

export default Todo