import React from "react";
export default function Todo({ todo, toggleComplete, handleDelete }) {

  function handleCheckBoxClick() {
    toggleComplete(todo.id);
  }

  const handleDeleteClick = () => {
    handleDelete(todo.id);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleCheckBoxClick}
      />
      <li>{todo.name}</li>
      <button onClick={handleDeleteClick}>X</button>
    </div>
  )
}
