import React, { useContext } from "react";
import { Context } from "../context.js";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(Context);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          status={todo.status}
        />
      ))}
    </div>
  );
}

export default TodoList;
