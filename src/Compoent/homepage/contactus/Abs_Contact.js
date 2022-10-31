import React, { Component } from "react";
const Abs_Contact = (props) => {
const  {icon,detaildisp,}=props   
  return (
    <>
      <div className="contact-info ">
        <div className="detail d-flex align-items-center ">
          <div className="icon-div">
           <div className="icon">{icon}</div>
          </div>
          <div className="detail-disp">
            <p className="m-0">{detaildisp}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Abs_Contact;
