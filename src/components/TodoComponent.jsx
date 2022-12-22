import React from "react";
import { Link } from "react-router-dom";
function TodoComponent({ text, to, id, removeTodo }) {
  return (
    <li className="TodoComponent">
      <div contentEditable={false}>
        <Link to={to}>{text}</Link>
      </div>
      <div className="TodoItem-delete" onClick={() => removeTodo(id)}>
        <img src={require("../images/delete.png")} alt="" />
      </div>
    </li>
  );
}

export default TodoComponent;
