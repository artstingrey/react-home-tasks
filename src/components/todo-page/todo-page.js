import { useEffect, useState } from "react";
import TodoList from "../todo-list/todo-list";
import AddTodoItem from "../add-todo-item/add-todo-item";
import { checkLocalStorage } from "../../helpers/helpers";

const TodoPage = () => {
  const localStorageKey = "todolist";
  const [todoList, setTodoList] = useState((value) => checkLocalStorage());

  const addTodoItem = (action) => {
    const isAvailailableId = (element, index, array) =>
      array[index]?.id + 1 !== array[index + 1]?.id;
    let newItem = {
      id:
        todoList.findIndex(isAvailailableId) !== -1
          ? todoList[todoList.findIndex(isAvailailableId)].id + 1
          : todoList.length + 1,
      action,
    };

    setTodoList([...todoList, newItem].sort((a, b) => a.id - b.id));
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todoList));
  }, [todoList]);

  const deleteTodoItem = (id) => {
    let newArray = todoList.filter((element) => element.id !== id);
    setTodoList(newArray);
  };

  const changeTodoItem = (index, newItem) => {
    setTodoList(todoList.with(index, newItem));
  };

  return (
    <>
      <TodoList
        todos={todoList}
        deleteTodoItem={deleteTodoItem}
        changeTodoItem={changeTodoItem}
      />
      <AddTodoItem addTodoItem={addTodoItem} />
    </>
  );
};

export default TodoPage;
