
import { useState } from "react";
import TodoList from "../todo-list/todo-list";
import AddTodoItem from "../add-todo-item/add-todo-item";


const TodoPage = () => {
  const [todoList,setTodoList] = useState([{id:1,action:"drink water"},{id:2,action:"go to the cinema"}])

  const addTodoItem = (action) => {
      let newItem = {
        id: todoList.length + 1,
        action
      };
      setTodoList([...todoList,newItem]);
  } 

  const deleteTodoItem = (id) => {
    let newArray = todoList.filter((element) => element.id !== id);
    setTodoList(newArray);
  }
  
  return (
    <>
      <TodoList todos={todoList} deleteTodoItem={deleteTodoItem}/>
      <AddTodoItem addTodoItem={addTodoItem}/>
    </>
  );
};

export default TodoPage;