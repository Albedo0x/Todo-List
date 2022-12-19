import React from "react";

function TodoComponent({ text, id, todoNames, setTodoNames }) {
  // function removeTodoName(id) {
  //   setTodoNames(todoNames.filter((todoName) => todoName.id !== id));
  // }

  return (
    <li className="TodoComponent">
      <div>{text}</div>
      <div
        className="TodoItem-delete"
        // onClick={() => removeTodoName(id)}
      >
        <img src={require("../images/delete.png")} alt="" />
      </div>
    </li>
  );
}

export default TodoComponent;
