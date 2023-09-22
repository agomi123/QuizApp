import React from "react";
import { UseUserContext } from "../context/UserContext";
const Progress = () => {
  const {percent}=UseUserContext();
  const width= percent+"%";
  return (
    <div>
      <div
        class="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{width:"20%",border:".5px solid black"}}
      >
        <div class="progress-bar" role="progressbar" aria-valuenow={25} aria-valuemax="100" aria-valuemin="0" style={{width:width}}>
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default Progress;
