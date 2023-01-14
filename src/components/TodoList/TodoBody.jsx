import React from "react";
import TodoInput from "./TodoInput.jsx";
import TodoItemList from "./TodoItemList";

function TodoBody({ todo }) {
  return (
    <div className="TodoBody">
      <TodoInput id={todo.todoId} />
      {todo.todos.length > 0 ? (
        <TodoItemList todo={todo} />
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
}

export default TodoBody;
