import React from "react";
import TodoItemCheckBox from "./TodoItemCheckBox.jsx";
import TodoItemDelete from "../library/TodoItemDelete";
import { useDispatch } from "react-redux";
import { checkItem, deleteItem } from "../../toolkit/toolkitreducer.js";

function TodoItem({ otherId, task }) {
  const dispatch = useDispatch();
  const cls = ["TodoItem"];

  if (task.status) {
    cls.push("-checked");
  }

  function deleteItemRedux() {
    console.log("here");
    dispatch(
      deleteItem({
        todoId: otherId,
        taskId: task.id,
      })
    );
  }

  function checkItemRedux() {
    dispatch(
      checkItem({
        todoId: otherId,
        taskId: task.id,
      })
    );
  }

  return (
    <div className={cls.join("")}>
      <TodoItemCheckBox task={task} checkItem={() => checkItemRedux()} />
      <TodoItemDelete removeTodo={deleteItemRedux} />
    </div>
  );
}

export default TodoItem;
