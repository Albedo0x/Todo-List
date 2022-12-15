import React, { useContext } from "react";
import { Context } from "../context.js";

function TodoInput() {
  const { value, setValue, addTodo } = useContext(Context);

  return (
    <div className="TodoInput">
      <h1>MY TODO LIST</h1>
      <input
        type="text"
        placeholder="Введи что собираешься делать"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={addTodo}
      />
    </div>
  );
}

export default TodoInput;
