import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../toolkit/toolkitreducer";

function TodoInput({ id }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function addItemRedux(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      dispatch(
        addItem({
          taskId: id,
          value: value,
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
        onKeyUp={addItemRedux}
      />
    </div>
  );
}

export default TodoInput;
