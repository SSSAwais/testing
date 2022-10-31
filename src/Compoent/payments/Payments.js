import React, { Component, useState } from "react";
import "./Payments.css";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import { BANK, CASH } from "../../redux/consts";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";

const Payments = () => {
  const [payType, setPayType] = useState(BANK);
  const [bank, setBank] = useState(false);
  const [payee, setPayee] = useState("ABC USER");
  const [number, setNumber] = useState("0300-0000000");
  const [shop, setShop] = useState("Makkah Lubricants");
  const [receivable, setReceivable] = useState("00000");
  const [amountReceived, setAmountReceived] = useState("123");
  const [date, setDate] = useState();
  const handlePayment = (type) => {
    setPayType(type);
    setBank(!bank);
  };
  return (
    <>
      <section className="">
        <div className="payment-section">
          <div className="container">
            <div className="row heading-row">
              <div className="col-lg-12 text-center mb-4">
                <Abs_Heading heading="Payment" />
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12">
                  <Abs_Input
                    classN="form-control w-100"
                    placeholder="Search Client"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* payment detail section */}
        <div className="second-payment">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <table className="tablet-view1">
                  <thead>
                    <tr>
                      <td>Name:</td>
                      <td className="paymet-inputs">
                        {" "}
                        <input
                          value={payee}
                          onChange={(e) => setPayee(e.target.value)}
                          className="w-100"
                        />{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Shop:</td>
                      <td className="paymet-inputs">
                        {" "}
                        <input
                          value={shop}
                          onChange={(e) => setShop(e.target.value)}
                          className="w-100"
                        />{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Amount Received:</td>
                      <td className="paymet-inputs">
                        {" "}
                        <input
                          min={1}
                          type="number"
                          value={amountReceived}
                          onChange={(e) => setAmountReceived(e.target.value)}
                          className="w-100"
                        />{" "}
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="col-lg-6 col-md-12">
                <table className=" tablet-view1">
                  <thead>
                    <tr>
                      <td>Phone Number:</td>
                      <td>
                        {" "}
                        <input
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          className="w-100"
                        />{" "}
                      </td>
                    </tr>
                    <tr>
                      <td className="recevieabless">Receivables:</td>
                      <td>
                        {" "}
                        <input
                          value={receivable}
                          // onChange={(e) => setReceivable(e.target.value)}
                          className="w-100 recevieabless"
                        />{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Date:</td>
                      <td>
                        {" "}
                        <input
                        type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-100"
                        />{" "}
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className="row  mt-4">

              {/* payment type section start here */}
              <div className="col-lg-6">
                <div>
                  <label>Payments</label>
                  <div className="dropdown">
                    <button
                      className="btn drop-btn dropdown-toggle w-100"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <p className="m-0 payment-dropdown">
                        {" "}
                        Select Payment Mode <span> {`${payType}`}</span>{" "}
                      </p>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handlePayment(CASH)}
                      >
                        {CASH}
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handlePayment(BANK)}
                      >
                        {BANK}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* payment seclection type section ends here */}
            </div>
            <div className="row mt-3 pb-5">
              <div className="col-lg-6">
                <textarea
                  rows={4}
                  className="w-100"
                  placeholder="Please Enter the Detail Of Payment"
                >
                  {" "}
                </textarea>
              </div>
              <div>
                <Abs_Button title="Save Data" />
              </div>
            </div>
          </div>
        </div>
        {/* payment detail section ends here */}
      </section>
    </>
  );
};
export default Payments;
