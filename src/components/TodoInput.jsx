import React, { useState, useContext } from "react";
import { Context } from "../context";

function TodoInput({ id }) {
  const { test, setTest } = useContext(Context);
  const [value, setValue] = useState("");

  function addItem(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      setTest(
        test.map((elem) => {
          if (elem.todoId === id) {
            elem.todos.push({
              id: Date.now() / 2,
              status: false,
              text: value,
            });
          }
          return elem;
        })
      );
      setValue("");
    }
  }

  return (
    <div className="TodoInput">
      <input
        type="text"
        placeholder="Введи что собираешься делать"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={addItem}
      />
    </div>
  );
}

export default TodoInput;
