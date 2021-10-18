import React from "react";
import "./taskItem.css";

function Taskitem({ val }) {
  return (
    <div id="hello">
      <span>
        <h1>{val["name"]}</h1>
        <p>{val["food"] + " " + val["latitude"] + " " + val["longitude"]}</p>
      </span>
    </div>
  );
}
export default Taskitem;
