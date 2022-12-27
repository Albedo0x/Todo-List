import React, { useContext } from "react";
import { Context } from "../context.js";

function TodoItem({ text, id, status, test, setTest, otherId, todos }) {
  const cls = ["TodoItem"];
  // const { dispatch } = useContext(Context);
  if (status) {
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
          checked={status}
          onChange={() => checkItem(id)}
        />
      </div>
      <div className="TodoItem-text">{text}</div>
      <div className="TodoItem-buttons">
        <div className="TodoItem-delete" onClick={() => deleteItem(id)}>
          <img src={require("../images/delete.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
