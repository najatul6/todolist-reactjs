import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo,todoIndex) => todoIndex!== index));
  };

  const handleUpdateTodo = (index) => {
    setTodos(todos.filter((todo,todoIndex) => todoIndex!== index));
  }

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} todos={todos} />
    </>
  );
}

export default App;
