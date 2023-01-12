import React, { useState, useContext } from "react";
import { Context } from "../../context/context";

function TodoInput({ id }) {
  const { dispatch } = useContext(Context);
  const [value, setValue] = useState("");

  function addItem(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      dispatch({
        type: "addItem",
        payload: {
          taskId: id,
          value: value,
        },
      });
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
