import React from "react";
import TodoHeader from "./TodoHeader.jsx";
import TodoBody from "./TodoBody";

function TodoList({ todo, index }) {
  return (
    <div className="TodoList">
      <TodoHeader
        desc={todo.todoDescription}
        header={todo.todoName}
        otherId={todo.todoId}
        key={todo.todoId}
        index={index}
      />
      <TodoBody todo={todo} index={index} />
    </div>
  );
}

export default TodoList;
