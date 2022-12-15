import React, { useContext } from "react";
import { Context } from "../context.js";

function TodoItem({ text, id, status }) {
  const cls = ["TodoItem"];
  const { dispatch } = useContext(Context);

  if (status) {
    cls.push("-checked");
  }

  return (
    <div className={cls.join("")}>
      <div className="TodoItem-checkbox">
        <input
          type="checkbox"
          checked={status}
          onChange={() =>
            dispatch({
              type: "check",
              payload: id,
            })
          }
        />
      </div>
      <div className="TodoItem-text">{text}</div>
      <div className="TodoItem-buttons">
        <div
          className="TodoItem-delete"
          onClick={() =>
            dispatch({
              type: "remove",
              payload: id,
            })
          }
        >
          <img src={require("../images/delete.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
