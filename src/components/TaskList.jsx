import React, { useContext } from "react";
import TaskInput from "./TaskInput";
import TaskComponent from "./TaskComponent";
import { Context } from "../context";

function TaskList() {
  const { test } = useContext(Context);

  return (
    <div className="TaskList">
      <div className="TaskList-Container">
        <TaskInput />
        <ul className="TaskList-List">
          {test.map((todo) => (
            <TaskComponent
              key={todo.todoId}
              id={todo.todoId}
              text={todo.todoName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
