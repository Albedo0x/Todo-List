import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TodoItemDelete from "../library/TodoItemDelete";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../toolkit/toolkitreducer";

function TaskComponent({ text, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeState = useSelector((state) => state.toolkit);

  let prevTodo;
  const cur = storeState.findIndex((item) => item.todoName === text);
  if (cur > 0) {
    prevTodo = storeState[cur - 1].todoName;
  } else {
    prevTodo = storeState[0].todoName;
  }

  function removeTodoRedux(event) {
    event.preventDefault();
    dispatch(removeTodo({ taskId: id }));
    navigate(`/${prevTodo}`);
  }

  return (
    <li className="TaskComponent">
      <NavLink className="TaskComponent-Link" to={`/${text}`}>
        {({ isActive }) => {
          return isActive ? (
            <>
              <TodoItemDelete removeTodo={removeTodoRedux} />
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
