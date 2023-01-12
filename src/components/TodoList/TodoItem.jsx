import React, { useContext } from "react";
import { Context } from "../../context/context.js";
import TodoItemCheckBox from "./TodoItemCheckBox.jsx";
import TodoItemDelete from "../library/TodoItemDelete";

function TodoItem({ otherId, task, todos }) {
  const { dispatch } = useContext(Context);
  const cls = ["TodoItem"];

  if (task.status) {
    cls.push("-checked");
  }

  function deleteItem() {
    dispatch({
      type: "deleteItem",
      payload: {
        todoId: otherId,
        taskId: task.id,
      },
    });
  }

  function checkItem() {
    dispatch({
      type: "checkItem",
      payload: {
        todoId: otherId,
        taskId: task.id,
      },
    });
  }

  function sortAfterCheck() {}

  return (
    <div className={cls.join("")}>
      <TodoItemCheckBox task={task} checkItem={() => checkItem()} />
      <TodoItemDelete removeTodo={deleteItem} />
    </div>
  );
}

export default TodoItem;
