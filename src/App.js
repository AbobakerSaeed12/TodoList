import React, { useState, useEffect, useRef } from "react"
import uuid from "react-uuid"
import TodoList from "./components/TodoList"
import "./index.css"

const LOCAL_STORAGE_KEY = "todoApp.todos"

export default function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleComplete = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

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

  const handleClearCompletedTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete)
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
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
      <button onClick={handleClearCompletedTodos}>Clear completed todos</button>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
      />
      <div className="todos-left">
        {todos.filter((todo) => !todo.complete).length} todos left
      </div>
    </div>
  )
}
