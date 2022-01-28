import React from 'react'
import Todo from "./Todo"

export default function TodoList({todos, toggleComplete}) {
  return (
    todos.map(todo => {
      return <Todo 
                className="todo-item" 
                key={todo.id} 
                toggleComplete={toggleComplete} 
                todo={todo} 
              />
    })
  )
}


