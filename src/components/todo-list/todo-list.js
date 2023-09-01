const TodoList = ({ todos,deleteTodoItem}) => {

    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo) => {
          return <div key={todo.id}> <span>{todo.id} {todo.action}</span><button onClick={() => deleteTodoItem(todo.id)}>Delete</button></div>;
        })}
     
      </>
    );
  };
  export default TodoList