import { useState } from "react"

const AddTodoItem = ({addTodoItem})=>{
    const [inputValue, setinputValue] = useState('');

    return<>
        <input type="text"   value={inputValue} placeholder="Add action" onInput={(e) => setinputValue(e.target.value)}/>
        <button onClick={() =>{  if(inputValue) {addTodoItem(inputValue)
        setinputValue("")}
    }}>Add item</button>
    </>
}
export default AddTodoItem