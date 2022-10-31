import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import { LS_COMPANY_DATA } from "../../redux/consts";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
const CompaniesForm = ({ updateCompany }) => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [compDetail, setCompDetail] = useState(lsGetItem(LS_COMPANY_DATA));

  const [message, setMessage] = useState(false);

  useEffect(() => {
    lsSetItem(LS_COMPANY_DATA, compDetail);
  }, [compDetail]);

  // const handleCompany = () => {
  //   const newComp = [
  //     ...compDetail,
  //     {
  //       id: compDetail.length + 1,
  //       date,
  //       name,
  //       detail,
  //     },
  //   ];

  //   // if(date == ""){
  //   //   setMessage(true)
  //   //   updateCompany(newComp);

  //   // } else{
  //   //   setMessage(false)
  //   //   updateCompany(newComp);
  //   // }

  //   updateCompany(newComp);

  //   setName("");
  //   setDetail("");
  //   setDate("");
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newComp = [
      ...compDetail,
      {
        id: compDetail.length + 1,
        date,
        name,
        detail,
      },
    ];

    if (date == "" || name == "" || compDetail == "") {
      setMessage(true);
    } else {
      setMessage(false);
      updateCompany(newComp);

      setName("");
      setDetail("");
      setDate("");
    }

    // updateCompany(newComp);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="row justify-content-center text-end">
          <div className="col-lg-3 text-start d-flex flex-column">
            <div className="date_section_company">
              <span>Date: </span>
              <Abs_Input
                val={date}
                changeFunc={(e) => setDate(e.target.value)}
                type="date"
                placeholder="Enter the Task Title"
                classN="w-75 mb-1"
              />
            </div>
            <div className="text-start">
              {" "}
              {message && !date && (
                <div className="mb-3">
                <p className="m-0 Data error_msg_company1">Please Enter Date</p>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="d-flex flex-column justify-content-center align-items-center comp_detail_section">
                <Abs_Input
                  type="text"
                  classN=" mt-3 form-control comp_input"
                  placeholder="Enter the Company Name"
                  val={name}
                  changeFunc={(e) => setName(e.target.value)}
                />
                  <div className="text-start">
                {message && !name && (
                  <div className="mb-3"> 
                  <p className="m-0 Data error_msg_company2">Please Enter Company Name</p>
                  </div>
                )}
                </div>

                <textarea
                  className="form-control mt-2 pb-2  comp_input" 
                  rows="4"
                  placeholder="Enter the Company Discription"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                ></textarea>

                {message && !detail && (
                  <div className="mb-4">
                  <p className="m-0 Data error_msg_company3">Please Enter Company Detail</p>
                </div>
                )}
                <Abs_Button className="pt-2" title="Save" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default CompaniesForm;
