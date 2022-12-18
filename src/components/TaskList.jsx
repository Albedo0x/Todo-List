import React, { useState, useEffect } from "react";
import TodoComponent from "./TodoComponent";

function TaskList() {
  const [value, setValue] = useState("");
  const [todoNames, setTodoNames] = useState([
    {
      id: Date.now(),
      status: false,
      text: "",
    },
  ]);

  useEffect(() => {
    setTodoNames(JSON.parse(localStorage.getItem("todoNames")));
  }, []);

  useEffect(() => {
    localStorage.setItem("todoNames", JSON.stringify(todoNames));
  }, [todoNames]);

  function addTodo(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      setTodoNames([
        ...todoNames,
        { id: Date.now(), status: false, text: e.target.value },
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
          {todoNames.map((todoName) => (
            <TodoComponent
              key={todoName.id}
              id={todoName.id}
              text={todoName.text}
              status={todoName.status}
              todoNames={todoNames}
              setTodoNames={setTodoNames}
            />
          ))}
        </ul>
        <ul className="TaskList-Completed"></ul>
      </div>
    </div>
  );
}

export default TaskList;
