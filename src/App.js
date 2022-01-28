import React, { useState, useRef } from "react"
import uuid from "react-uuid"
import TodoList from "./components/TodoList"
import "./index.css"


export default function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  const handleClick = (e) => {
    const todoName = todoNameRef.current.value
    const todoInfo = { id: uuid(), name: todoName, complete: false }
    if (todoName.trim().length > 0) {
      setTodos((prevTodos) => {
        return [...prevTodos, todoInfo]
      })
    } else {
      alert("Enter a todo")
    }
    todoNameRef.current.value = ""
  }


  return (
    <div className="App">
      <h2>Todo List</h2>
      <input
        className="inputField"
        ref={todoNameRef}
        type="text"
        name="todo-name"
      />
      <button onClick={handleClick}>Add</button>
      <button>Clear completed todos</button>
      <TodoList todos={todos} />
      <div className="task-left"> task left </div>
    </div>
  )
}
