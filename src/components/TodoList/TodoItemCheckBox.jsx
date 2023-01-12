import React from "react";

function TodoItemCheckBox({ checkItem, task }) {
  return (
    <div className="TodoItem-checkbox">
      <input
        type="checkbox"
        className="TodoItem-checkbox_checkbox"
        checked={task.status}
        onChange={checkItem}
        id={task.id}
      />
      <label className="TodoItem-checkbox_text" htmlFor={task.id}>
        {task.text}
      </label>
    </div>
  );
}

export default TodoItemCheckBox;
