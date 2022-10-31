import React, { Component, useEffect, useState } from "react";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import { Link } from "react-router-dom";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import { LS_CLIENT_DATA } from "../../redux/consts";
import { lsGetItem, lsSetItem } from "../../utils/helpers";

const ClientForm = ({ updateClient }) => {
  const [clientName, setClientName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [shop, setShop] = useState("");
  const [userData, setUserData] = useState(lsGetItem(LS_CLIENT_DATA));
  const [message, setMessage] = useState(false);
  const onSubmitClientHandler = (e) => {
    e.preventDefault();
    const Clients = [
      ...userData,
      {
        id: userData.length + 1,
        clientName,
        number,
        address,
        shop,
      },
    ];
    if (clientName == "" || number == "" || address == "" || shop == "") {
      setMessage(true);
    } else {
      setMessage(false);
      updateClient(Clients);
      setClientName("");
      setNumber("");
      setAddress("");
      setShop("");
    }
  };
  const SaveClient = () => {
    // const Clients = [
    //   ...userData,
    //   {
    //     id: userData.length + 1,
    //     clientName,
    //     number,
    //     address,
    //     shop,
    //   },
    // ];
    // if (clientName == "" || number == "" || address == "" || shop=="") {
    //   setMessage(true);
    // } else {
    //   setMessage(false);
    //     updateClient(Clients);
    //   setClientName("");
    //   setNumber("");
    //   setAddress("");
    //   setShop("")
    // }
    // setClientName("");
    // setNumber("");
    // setAddress("");
    // setShop("");
    // updateClient(Clients);
  };
  const min='0';
  const max="10000000000"

  const handleNumberChange=(e)=>{
    const number = Math.max(min,Math.min(max,Number(e.target.value)))
   setNumber(number);
  }
  return (
    <>
      <form onSubmit={onSubmitClientHandler}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="client-info-box">
              <label className="form-label">Client Name</label>
              <Abs_Input
                changeFunc={(e) => setClientName(e.target.value)}
                type="text"
                val={clientName}
                classN="form-control"
              />
              {message && !clientName && (
                <p className="m-0 Data clients">Please Enter Client Name</p>
              )}
            </div>
            <div className="input-section client-info-box2">
              <label className="form-label">Address</label>
              <Abs_Input
                changeFunc={(e) => setAddress(e.target.value)}
                type="text"
                val={address}
                classN="form-control"
              />
              {message && !address && (
                <p className="m-0 Data clients2">Please Enter Address</p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="client-info-box3">
              <label className="form-label">Number</label>
              <Abs_Input
                changeFunc={handleNumberChange}
                type="number"
                val={number}
                classN="form-control"
              />
              {message && !number && (
                <p className="m-0 Data clients3">Please Enter Number</p>
              )}
            </div>
            <div className="input-section client-info-box4">
              <label className="form-label">Shop Name:</label>
              <Abs_Input
                changeFunc={(e) => setShop(e.target.value)}
                type="text"
                val={shop}
                classN="form-control"
              />
              {message && !shop && (
                <p className="m-0 Data clients4">Please Enter Shop Name</p>
              )}
            </div>
          </div>
          <div className="form-submit-button">
            <Abs_Button title="Save Client" />
          </div>
        </div>
      </form>
    </>
  );
};
export default ClientForm;
