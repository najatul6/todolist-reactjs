import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
   
    setTodos(todos.filter((todo,todoIndex) => todoIndex!== index));
  };

  const handleUpdateTodo = (index) => {
    setTodoValue(todos[index])
    handleDeleteTodo(index);
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo} />
      <TodoList handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} todos={todos} />
    </>
  );
}

export default App;
