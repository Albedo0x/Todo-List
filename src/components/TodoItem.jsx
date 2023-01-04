import React, { useContext } from "react";
import { Context } from "../context.js";

function TodoItem({ otherId, task }) {
  const { test, setTest } = useContext(Context);
  const cls = ["TodoItem"];
  // const { dispatch } = useContext(Context);
  if (task.status) {
    cls.push("-checked");
  }

  function deleteItem(id) {
    setTest(
      test.map((elem) => {
        if (elem.todoId === otherId) {
          elem.todos.splice(
            elem.todos.findIndex((item) => item.id === id),
            1
          );
        }
        return elem;
      })
    );
  }

  function checkItem(id) {
    setTest(
      test.map((elem) => {
        if (elem.todoId === otherId) {
          elem.todos.map((todo) => {
            if (todo.id === id) {
              todo.status = !todo.status;
            }
            return todo;
          });
        }
        return elem;
      })
    );
  }

  return (
    <div className={cls.join("")}>
      <div className="TodoItem-checkbox">
        <input
          type="checkbox"
          checked={task.status}
          onChange={() => checkItem(task.id)}
        />
      </div>
      <div className="TodoItem-text">{task.text}</div>
      <div className="TodoItem-buttons">
        <div className="TodoItem-delete" onClick={() => deleteItem(task.id)}>
          <img src={require("../images/remove_white.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
