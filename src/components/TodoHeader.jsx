import React, { useState } from "react";

function TodoHeader({ header, desc, setTest, test, otherId }) {
  const [readOnly, setReadOnly] = useState(true);
  const [value, setValue] = useState(desc);

  function enableEditing(e) {
    setReadOnly(false);
  }

  function changeDescription(e) {
    setValue(e.target.value);
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
          <img src={require("../images/skyrim header_left.png")} alt="" />
        </div>
        <div className="TodoHeader-Name">{header}</div>
        <div className="TodoHeader-Img">
          <img src={require("../images/skyrim header_right.png")} alt="" />
        </div>
      </div>
      <div className="TodoHeader-Description">
        <textarea
          className="TodoHeader-Text"
          readOnly={readOnly}
          value={value}
          onDoubleClick={enableEditing}
          onChange={(e) => changeDescription(e)}
          onKeyDown={(e) => finishEditing(e)}
        ></textarea>
      </div>
    </div>
  );
}

export default TodoHeader;
