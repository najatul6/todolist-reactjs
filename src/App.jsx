import { useState } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {


  const [todos,setTodos]=useState([
    "Go to the gym",
    "Go to the park",
    "Go to the beach",
    "Go to the mall",
    "Go to the cinema",
    "Go to the restaurant",
    "Go to the library",
    "Go to the shop",
    "Go to the supermarket",
    "Go to the bank",
    "Go to the post office",
  ])

  const handleAddTodo=(newTodo)=>{
    setTodos([...todos,newTodo])
  }

  return (
    <>
     <TodoInput handleAddTodo={handleAddTodo}/>
     <TodoList todos={todos}/>
    </>
  )
}

export default App
