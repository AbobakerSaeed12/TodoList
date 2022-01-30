import React from "react";
import "./style.css"

export default function Todo({ todo, toggleComplete, handleDelete }) {

  function handleCheckBoxClick() {
    toggleComplete(todo.id);
  }

  const handleDeleteClick = () => {
    handleDelete(todo.id);
  }

  return (
    <div className="todocomponent">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleCheckBoxClick}
        
      />
      <li className="todoname" style={{ textDecoration: todo.complete ? "line-through" : null }}>
        {todo.name}
      </li>
      <button onClick={handleDeleteClick}>X</button>
    </div>
  )
}
