import React, { useContext, useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import { useDispatch } from "react-redux";

function TaskInput() {
  // const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const idOfTodo = useId();

  function addTodo(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      dispatch({
        type: "addTodo",
        payload: {
          idOfTodo: idOfTodo,
          value: value,
        },
      });
      setValue("");
      navigate(`/${value}`);
    }
  }

  // function addTodoRedux(e) {
  //   if (e.keyCode === 13 && e.target.value !== "") {
  //     dispatch({
  //       type: "addTodo",
  //       payload: {
  //         idOfTodo: idOfTodo,
  //         value: e.target.value,
  //       },
  //     });
  //     setValue("");
  //     navigate(`/${value}`);
  //   }
  // }

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
        onKeyUp={addTodo}
      />
    </div>
  );
}

export default TaskInput;
