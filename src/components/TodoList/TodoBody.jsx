import React from "react";
import TodoInput from "./TodoInput.jsx";
import TodoItemList from "./TodoItemList";

function TodoBody({ todo, index }) {
  return (
    <div className="TodoBody">
      <TodoInput id={todo.todoId} index={index} />
      {todo.todos.length > 0 ? (
        <TodoItemList todo={todo} index={index} />
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
}

export default TodoBody;
