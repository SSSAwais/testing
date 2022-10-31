import React, { Component, useState } from "react";
import Abs_Contact from "./Abs_Contact";
import Abs_Input from "../../../AbstractComponent/Abs_input/Abs_input";
import './ContactUs.css';
import Abs_Button from "../../../AbstractComponent/Abs_Button/Abs_Button";


const ContactUs = () => {
  const [detail, setDetail] = useState([
    {
      icon: <i className="fa-solid fa-location-dot"></i>,
      detaildisp: "ADDRESS WILL BE PASTED HERE",
    },
    {
      icon: <i className="fa-solid fa-mobile-screen-button"></i>,
      detaildisp: "0300-0000000",
    },
    {
      icon: <i className="fa-solid fa-envelope-open"></i>,
      detaildisp: "abc@gmail.com",
    },
    {
      icon: <i className="fa-brands fa-whatsapp"></i>,
      detaildisp: "0300-0000000",
    },
  ]);

  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [num,setNum]=useState();
  const submitForm=()=>{
    console.log("Submit function Called");
  }
  return (
    <>
    <form>
      <section className="contact-us">
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-8 text-center">
                <h3 className="heading">Contact Us</h3>
                <h3 className="chat">Let’s Have A Chat!</h3>
                <p className="char-para">You may contact me by filling in this form any time you need professional support or have any questions. You can also fill in the form to leave your comments or feedback.</p>
          </div>
          </div>
          <div className="row mt-5">
          
            <div className="col-lg-6 col-md-12">
              {detail.map((e, idx) => (
                <div key={idx}>
                  {" "}
                  <Abs_Contact icon={e.icon} detaildisp={e.detaildisp} />
                </div>
              ))}
            </div>
            <div className="col-lg-6 col-md-12">
                <Abs_Input
                type="text"
                classN="w-100 p-2 "
                placeholder="Name"
                val={name}
                />
                  <Abs_Input
                type="email"
                classN="w-100 p-2 mt-2 mb-2"
                placeholder="E-mail"
                val={email}
                />
                  <Abs_Input
                type="number"
                classN="w-100 p-2 mb-2"
                placeholder="TelePhone"
                val={num}
                />
                <textarea  rows="5"  className="w-100 mb-4" placeholder="Message" ></textarea>
                <Abs_Button
                title="Submit"
                events={submitForm}
                />
              
            </div>
          </div>
        </div>
      </section>
      </form>
    </>
  );
};
export default ContactUs;
