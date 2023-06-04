import React, { useState } from "react";

const TodoItem = ({ id, text, onDelete }) => {
  const [checked, setChecked] = useState(false)
  const handleChecked = () => {
    setChecked(prev => !prev)
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id={id}
        name="todo-check"
        checked={checked}
        onClick={handleChecked}
      />
      <label for={id}>{text}</label>
      <button type="button" onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
