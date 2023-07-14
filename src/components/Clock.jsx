import React, { useState } from "react";
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var tim =
  hours.toString() + " " + minutes.toString() + " " + seconds.toString();

function Clock() {
  const [time, setTime] = useState(tim);
  function inc() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time =
      hours.toString() + ": " + minutes.toString() + ": " + seconds.toString();
    setTime(time);
  }
  setTimeout(inc, 1000);
  return (
    <div>
      <h2>Time</h2>
      <div className="clock text-center">{time}</div>
    </div>
  );
}

export default Clock;
