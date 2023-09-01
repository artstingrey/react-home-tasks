import { useState } from "react";

const TodoItem = ({index, todo, deleteTodoItem, changeTodoItem}) => {
    const [isEdit, setIsedit] = useState(false);
    const [inputValue, setinputValue] = useState(todo.action);

    const toogleEdit = () => {
        if(isEdit) {
            setIsedit(false);
            changeTodoItem(index,{
                id: todo.id,
                action: inputValue
            });
        } else {
            setIsedit(true);
        }
    }

    return (
      <>
        <div key={todo.id}> {isEdit ? <input type="text" value={inputValue} onInput={(e) => setinputValue(e.target.value)} /> : <span>{todo.id} {todo.action}</span>}<button onClick={() => toogleEdit()}>{isEdit ? 'Ok' : 'Edit'}</button><button onClick={() => deleteTodoItem(todo.id)}>Delete</button></div>
      </>
    );
  };
  export default TodoItem