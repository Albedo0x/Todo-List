import React, { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTodo } from "../../toolkit/toolkitreducer";
// import { addTodoAction } from "../../store/taskreducer";

function TaskInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const idOfTodo = useId();

  function addTodoRedux(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      dispatch(addTodo({ idOfTodo: idOfTodo, value: e.target.value }));
      setValue("");
      navigate(`/${value}`);
    }
  }

  return (
    <div className="TaskList-Input">
      <input
        type="text"
        placeholder="Новая задача"
        maxLength="14"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyUp={addTodoRedux}
      />
    </div>
  );
}

export default TaskInput;
