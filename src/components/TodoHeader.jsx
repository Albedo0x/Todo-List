import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context.js";

function TodoHeader({ header, desc, otherId }) {
  const { test, setTest } = useContext(Context);
  const [readOnly, setReadOnly] = useState(true);
  const [value, setValue] = useState(desc);
  const [headerValue, setHeaderValue] = useState(header);
  const navigate = useNavigate();

  function changeName(e) {
    setHeaderValue(e.target.value);
  }

  function enableEditing() {
    setReadOnly(false);
  }

  function changeDescription(e) {
    setValue(e.target.value);
  }

  function finishNameEditing(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setReadOnly(true);
      setTest(
        test.map((elem) => {
          if (elem.todoId === otherId) {
            elem.todoName = headerValue;
          }
          return elem;
        })
      );
      navigate(`/${headerValue}`);
    }
  }

  function finishEditing(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setReadOnly(true);
      setTest(
        test.map((elem) => {
          if (elem.todoId === otherId) {
            elem.todoDescription = value;
          }
          return elem;
        })
      );
    }
  }

  return (
    <div className="TodoHeader">
      <div className="TodoHeader-Head">
        <div className="TodoHeader-Img">
          <img src={require("../images/dragon_left.png")} alt="" />
        </div>
        <input
          className="TodoHeader-Name"
          type="text"
          value={headerValue}
          readOnly={readOnly}
          onDoubleClick={enableEditing}
          onChange={(e) => changeName(e)}
          onKeyDown={(e) => finishNameEditing(e)}
          spellCheck="false"
        />
        <div className="TodoHeader-Img">
          <img src={require("../images/dragon_right.png")} alt="" />
        </div>
      </div>
      <div className="TodoHeader-Description">
        <textarea
          className="TodoHeader-Text"
          readOnly={readOnly}
          value={value}
          onDoubleClick={enableEditing}
          spellCheck="false"
          onChange={(e) => changeDescription(e)}
          onKeyDown={(e) => finishEditing(e)}
          maxLength="600"
        ></textarea>
      </div>
    </div>
  );
}

export default TodoHeader;
