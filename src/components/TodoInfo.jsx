import React from "react";
import { weekday, monthOfTheYear } from "../skyrimcalendar";

function TodoInfo() {
  let d = new Date();
  let day = d.getDate();
  let h = d.getHours();
  let m = d.getMinutes();
  let y = d.getFullYear();
  let month = d.getMonth();
  let myear = monthOfTheYear[month];
  let wday = weekday[d.getDay()];

  return (
    <div className="todoinfo">
      <div className="todoinfo-img">
        <img src={require("../images/logo_v3.png")} alt="" />
      </div>
      <h1>
        {wday}, {h}:{m}, {day} {myear}, {y}
      </h1>
    </div>
  );
}

export default TodoInfo;
