import React from "react";

function TodoHeader({ header, desc }) {
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
        <div className="TodoHeader-Text">{desc}</div>
      </div>
    </div>
  );
}

export default TodoHeader;
