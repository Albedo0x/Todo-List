import React from "react";
import TodoItem from "./TodoItem";

function TodoItemList({ todo }) {
  return (
    <div className="TodoItemList">
      {todo.todos.map((task, i) => (
        <TodoItem
          // key={task.id}
          key={i}
          task={task}
          otherId={todo.todoId}
          todos={todo.todos}
        />
      ))}
    </div>
  );
}

export default TodoItemList;
