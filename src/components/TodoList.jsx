import React, { useContext } from "react";
import { Context } from "../context.js";
import TodoItem from "./TodoItem";
import TodoHeader from "./TodoHeader.jsx";

function TodoList({ test }) {
  // const { state } = useContext(Context);
  return (
    <div className="TodoList">
      <TodoHeader />
      {/* <div className="TodoBody">
        {test.map((todo, index) => (
          <TodoItem
            key={todo.todoName}
            id={todo.todoId}
            text={todo.text}
            status={todo.status}
          />
        ))}
      </div>  */}
    </div>
  );
}

export default TodoList;
