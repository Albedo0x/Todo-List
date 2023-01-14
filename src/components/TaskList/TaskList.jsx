import React from "react";
import TaskInput from "./TaskInput";
import TaskComponent from "./TaskComponent";
import { useSelector } from "react-redux";

function TaskList() {
  const store = useSelector((state) => state.task);

  return (
    <div className="TaskList">
      <div className="TaskList-Container">
        <TaskInput />
        <ul className="TaskList-List">
          {store.map((todo) => (
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
