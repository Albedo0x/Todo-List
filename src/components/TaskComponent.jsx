import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

function TaskComponent({ text, id }) {
  const { test, setTest } = useContext(Context);
  const navigate = useNavigate();

  function removeTodo(id) {
    setTest(test.filter((todo) => todo.todoId !== id));
    navigate(-1);
  }

  return (
    <li className="TodoComponent">
      <div className="TodoItem-delete" onClick={() => removeTodo(id)}>
        <img src={require("../images/remove_white.png")} alt="" />
      </div>
      <div className="TodoComponent-Name">
        <NavLink
          to={text}
          style={({ isActive }) => {
            return isActive ? { fontSize: "26px", fontWeight: "bold" } : {};
          }}
        >
          {text}
        </NavLink>
      </div>
    </li>
  );
}

export default TaskComponent;
