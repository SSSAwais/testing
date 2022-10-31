import React, { Component } from "react";
import "./Abs_DropDown.css";
const Abs_DropDown = (props) => {
  const {
    dropdowntitle,
    firstoption,
    secondoption,
    thirdoption,
    events1,
    events2,
    events3,
    events4,
    fourthoption
  } = props;
  return (
    <>
      <div className="dropdown">
        <button
          className="btn drop-btn dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <p className="m-0 porduct-downdowns">
            {" "}
            <span>{dropdowntitle}</span>
          </p>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#" onClick={events1}>
            {firstoption}
          </a>
          <a className="dropdown-item" href="#" onClick={events2}>
            {secondoption}
          </a>
          <a className="dropdown-item" href="#" onClick={events3}>
            {thirdoption}
          </a>
          <a className="dropdown-item" href="#" onClick={events4}>
            {fourthoption}
          </a>
        </div>
      </div>
    </>
  );
};
export default Abs_DropDown;
