import React from "react";
import TodoItemCheckBox from "./TodoItemCheckBox.jsx";
import TodoItemDelete from "../library/TodoItemDelete";
import { useDispatch } from "react-redux";
import { checkItemAction, deleteItemAction } from "../../store/taskreducer.js";

function TodoItem({ otherId, task, todos }) {
  const dispatch = useDispatch();
  const cls = ["TodoItem"];

  if (task.status) {
    cls.push("-checked");
  }

  function deleteItemRedux() {
    console.log("here");
    dispatch(
      deleteItemAction({
        todoId: otherId,
        taskId: task.id,
      })
    );
  }

  function checkItemRedux() {
    dispatch(
      checkItemAction({
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
