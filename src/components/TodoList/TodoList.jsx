import React from "react";
import TodoHeader from "./TodoHeader.jsx";
import TodoBody from "./TodoBody";

function TodoList({ todo }) {
  return (
    <div className="TodoList">
      <TodoHeader
        desc={todo.todoDescription}
        header={todo.todoName}
        otherId={todo.todoId}
        key={todo.todoId}
      />
      <TodoBody todo={todo} />
    </div>
  );
}

export default TodoList;
