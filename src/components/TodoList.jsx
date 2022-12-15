import React, { useContext } from "react";
import { Context } from "../context.js";
import TodoItem from "./TodoItem";

function TodoList() {
  const { state } = useContext(Context);
  return (
    <div className="TodoList">
      {state.map((todo) => (
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
