import React from "react";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader.jsx";
import TodoInput from "./TodoInput.jsx";

function TodoList({ todo }) {
  return (
    <div className="TodoList">
      <TodoHeader
        desc={todo.todoDescription}
        header={todo.todoName}
        otherId={todo.todoId}
      />
      <div className="TodoBody">
        <TodoInput id={todo.todoId} />
        {todo.todos.map((task) => (
          <TodoItem key={task.id} task={task} otherId={todo.todoId} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
