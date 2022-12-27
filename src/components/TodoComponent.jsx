import React, { useState } from "react";
import { Link } from "react-router-dom";
function TodoComponent({ text, to, id, removeTodo }) {
  const [readOnly, setReadOnly] = useState(true);

  function updateTodoName() {
    console.log("hey");
    setReadOnly(readOnly ? false : true);
  }

  return (
    <li className="TodoComponent">
      <div readOnly={readOnly}>
        <Link to={to}>{text}</Link>
      </div>
      <div className="TodoItem-update">
        <button onClick={() => updateTodoName(id)}>Update</button>
      </div>
      <div className="TodoItem-delete" onClick={() => removeTodo(id)}>
        <img src={require("../images/delete.png")} alt="" />
      </div>
    </li>
  );
}

export default TodoComponent;
