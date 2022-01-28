import React from "react";
export default function Todo({ todo, toggleComplete}) {

  function handleCheckBoxClick() {
    toggleComplete(todo.id);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleCheckBoxClick}
      />
      <li>{todo.name}</li>
    </div>
  )
}
