import React from "react";

function TodoItemDelete({ removeTodo }) {
  return (
    <div className="TodoItem-delete" onClick={removeTodo}>
      <img src={require("../../images/remove_white.png")} alt="" />
    </div>
  );
}

export default TodoItemDelete;
