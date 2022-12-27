import React, { useState, useEffect, useId } from "react";
import TodoComponent from "./TodoComponent";

function TaskList({ test, setTest }) {
  const [value, setValue] = useState("");
  const idOdTodo = useId();
  const idOfTask = useId();

  function removeTodo(id) {
    setTest(test.filter((todo) => todo.todoId !== id));
  }

  function addTodo(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      setTest([
        ...test,
        {
          todoId: `${idOdTodo}-${Date.now()}`,
          todoName: `/${e.target.value}`,
          todoDescription: `This is ${e.target.value} to do`,
          todos: [
            {
              id: `${idOfTask}-e.target.value`,
              status: false,
              text: "like this8",
            },
          ],
        },
      ]);
      setValue("");
    }
  }

  return (
    <div className="TaskList">
      <div className="TaskList-Container">
        <div className="TaskList-Input">
          <input
            type="text"
            value={value}
            placeholder="+ Добавить"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyUp={addTodo}
          />
        </div>
        <ul className="TaskList-InProgress">
          {test.map((todoName) => (
            <TodoComponent
              key={todoName.todoId}
              id={todoName.todoId}
              text={todoName.todoName}
              to={todoName.todoName}
              removeTodo={removeTodo}
              // status={todoName.status}
              // todoNames={todoNames}
              // setTodoNames={setTodoNames}
            />
          ))}
        </ul>
        <ul className="TaskList-Completed"></ul>
      </div>
    </div>
  );
}

export default TaskList;
