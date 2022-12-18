import React from "react";

function TodoHeader() {
  return (
    <div className="TodoHeader">
      <div className="TodoHeader-Head">
        <div className="TodoHeader-Img">
          <img src={require("../images/skyrim header_left.png")} alt="" />
        </div>
        <div className="TodoHeader-Name"> Lorem Ipsum</div>
        <div className="TodoHeader-Img">
          <img src={require("../images/skyrim header_right.png")} alt="" />
        </div>
      </div>
      <div className="TodoHeader-Description">
        <div className="TodoHeader-Text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}

export default TodoHeader;
