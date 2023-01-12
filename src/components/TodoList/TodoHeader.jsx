import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context.js";

function TodoHeader({ header, desc, otherId }) {
  const { dispatch } = useContext(Context);
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
      dispatch({
        type: "editHeader",
        payload: {
          todoId: otherId,
          valueName: headerValue,
        },
      });
      navigate(`/${headerValue}`);
    }
  }

  function finishEditing(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setReadOnly(true);
      dispatch({
        type: "editDescription",
        payload: {
          todoId: otherId,
          valueDesc: value,
        },
      });
    }
  }

  return (
    <div className="TodoHeader">
      <div className="TodoHeader-Head">
        <div className="TodoHeader-Img">
          <img src={require("../../images/dragon_left.png")} alt="" />
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
          maxLength="20"
        />
        <div className="TodoHeader-Img">
          <img src={require("../../images/dragon_right.png")} alt="" />
        </div>
      </div>
      <div className="TodoHeader-Description">
        <textarea
          className="TodoHeader-Text"
          readOnly={readOnly}
          value={value}
          spellCheck="false"
          onDoubleClick={enableEditing}
          onChange={(e) => changeDescription(e)}
          onKeyDown={(e) => finishEditing(e)}
          maxLength="600"
        ></textarea>
      </div>
    </div>
  );
}

export default TodoHeader;
