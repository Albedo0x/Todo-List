import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import TodoItemDelete from "../library/TodoItemDelete";

function TaskComponent({ text, id }) {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  let prevTodo;
  const cur = state.findIndex((item) => item.todoName === text);
  if (cur > 0) {
    prevTodo = state[cur - 1].todoName;
  } else {
    prevTodo = state[0].todoName;
  }

  function removeTodo(event) {
    event.preventDefault();
    navigate(`/${prevTodo}`);
    dispatch({
      type: "removeTodo",
      payload: {
        taskId: id,
      },
    });
  }

  return (
    <li className="TaskComponent">
      <NavLink className="TaskComponent-Link" to={`/${text}`}>
        {({ isActive }) => {
          return isActive ? (
            <>
              <TodoItemDelete removeTodo={removeTodo} />
              <div className="TaskComponent-Name">{text}</div>
            </>
          ) : (
            <>
              <div></div>
              <div className="TaskComponent-Name">{text}</div>
            </>
          );
        }}
      </NavLink>
    </li>
  );
}

export default TaskComponent;
