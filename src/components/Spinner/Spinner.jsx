import React from "react";
import "./Spinner.scss";
function Spinner({name}) {
  return (
    <div className="lds-ring ">
      <div className={name}></div>
      <div className={name}></div>
      <div className={name}></div>
      <div className={name}></div>
    </div>
  );
}

export default Spinner;
