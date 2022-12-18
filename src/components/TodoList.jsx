import React, { useContext } from "react";
import { Context } from "../context.js";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader.jsx";

function TodoList() {
  const { state } = useContext(Context);
  return (
    <div className="TodoList">
      <TodoHeader />
      <div className="TodoBody">
        {state.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            status={todo.status}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
