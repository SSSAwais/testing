import React, { Component } from "react";
import "./Abs-Slider.css";

const Abs_Slider = (props) => {
  const { sliderImg, ClientName, reviews } = props;

  return (
    <>
      <div className="Slider-section">
        <div className="slider-img text-center">
          <img src={sliderImg} alt="image" className="img-fluid" />
        </div>
        <h2 className="clientname">{ClientName}</h2>
        <p className="reviews">{reviews}</p>
      </div>
    </>
  );
};
export default Abs_Slider;
