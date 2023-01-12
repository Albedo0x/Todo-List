import React from "react";
import TodoInput from "./TodoInput.jsx";
import TodoItemList from "./TodoItemList";

function TodoBody({ todo }) {
  return (
    <div className="TodoBody">
      <TodoInput id={todo.todoId} />
      <TodoItemList todo={todo} />
    </div>
  );
}

export default TodoBody;
