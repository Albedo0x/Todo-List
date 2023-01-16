import React from "react";
import TodoItem from "./TodoItem";

function TodoItemList({ todo, index }) {
  const orderedTodos = todo.todos.slice().sort((a, b) => a.status - b.status);

  return (
    <div className="TodoItemList">
      {orderedTodos.map((task, indexOfTodo) => (
        <TodoItem
          key={indexOfTodo}
          task={task}
          otherId={todo.todoId}
          todos={todo.todos}
          indexOfTodo={indexOfTodo}
          index={index}
        />
      ))}
    </div>
  );
}

export default TodoItemList;
