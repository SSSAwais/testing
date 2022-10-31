import React, { Component } from "react";
import './Abs_HomeSli.css';

const Abs_HomeSli = (props) => {
  const { sliderImg } = props;

  return (
    <>
      <div className="Slider-section-home">
        <div className="Homeslider text-center">
          <img src={sliderImg} alt="image" className="img-fluid iamges_banner" />
        </div>
      
      </div>
    </>
  );
};
export default Abs_HomeSli;
