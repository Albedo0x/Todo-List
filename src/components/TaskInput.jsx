import React, { useContext } from "react";
import { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

function TaskInput() {
  const [value, setValue] = useState("");
  const { test, setTest } = useContext(Context);
  const navigate = useNavigate();
  const idOfTodo = useId();

  function addTodo(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      setTest([
        ...test,
        {
          todoId: `${idOfTodo}-${Date.now()}`,
          todoName: `${value}`,
          todoDescription: `This is ${value} to do`,
          todos: [
            {
              id: `${idOfTodo}-${value}`,
              status: false,
              text: "Add tasks here",
            },
          ],
        },
      ]);
      setValue("");
      navigate(`${value}`);
    }
  }

  return (
    <div className="TaskList-Input">
      <input
        type="text"
        placeholder="Новая задача"
        maxLength="14"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyUp={addTodo}
      />
    </div>
  );
}

export default TaskInput;
