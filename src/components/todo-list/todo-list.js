import { useState } from "react";
import TodoItem from "../todo-item/todo-item";

const TodoList = ({ todos, deleteTodoItem, changeTodoItem }) => {
  const [isEdit, setIsedit] = useState(false);

  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            index={index}
            todo={todo}
            deleteTodoItem={deleteTodoItem}
            changeTodoItem={changeTodoItem}
          />
        );
      })}
    </>
  );
};
export default TodoList;
