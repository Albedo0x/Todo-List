import React, { useState } from "react";
import TodoItemCheckBox from "./TodoItemCheckBox.jsx";
import TodoItemDelete from "../library/TodoItemDelete";
import { useDispatch } from "react-redux";
import { checkItem, deleteItem } from "../../toolkit/toolkitreducer.js";

function TodoItem({ otherId, task, indexOfTodo, index }) {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const cls = ["TodoItem"];

  if (task.status) {
    cls.push("-checked");
  }

  function deleteItemRedux() {
    dispatch(
      deleteItem({
        todoId: index,
        taskId: indexOfTodo,
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
    <div
      className={cls.join("")}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {isActive ? (
        <>
          <TodoItemCheckBox task={task} checkItem={() => checkItemRedux()} />
          <TodoItemDelete removeTodo={deleteItemRedux} />
        </>
      ) : (
        <>
          <TodoItemCheckBox task={task} checkItem={() => checkItemRedux()} />
          <div></div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
