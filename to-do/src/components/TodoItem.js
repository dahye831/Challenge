import React from "react";

const TodoItem = ({ id, text }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" id={id} name="todo-check" />
      <label for={id}>{text}</label>
      <button type="button">삭제</button>
    </div>
  );
};

export default TodoItem;
