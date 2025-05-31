import React from "react"

function InputComponent({inputVal,writetodo,addtodo}){
    return(
        <div>
            <input type="text" className="iContainer" value={inputVal} onChange={writetodo}/>
            <button onClick={addtodo} >+</button>
        </div>
    )
}
export default InputComponent