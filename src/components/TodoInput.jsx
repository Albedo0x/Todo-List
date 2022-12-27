import React from "react";

function TodoInput() {
  const weekday = [
    "Morndas ",
    "Tirdas ",
    "Middas ",
    "Turdas ",
    "Fredas ",
    "Loredas ",
    "Sundas ",
  ];

  const monthOfTheYear = [
    "Morning Star ",
    "Sun's Dawn ",
    "First Seed ",
    "Rain's Hand ",
    "Second Seed ",
    "Mid Year ",
    "Sun's Height ",
    "Last Seed",
    "Hearthfire ",
    "Frost Fall ",
    "Sun's Dusk ",
    "Evening Star ",
  ];

  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let myear = monthOfTheYear[month];
  let wday = weekday[d.getDay()];

  return (
    <div className="TodoInput">
      <h1>
        {wday} ' {day}th of {myear}
      </h1>
    </div>
  );
}

export default TodoInput;
