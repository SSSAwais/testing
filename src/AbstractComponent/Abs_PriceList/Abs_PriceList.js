import React, { Component } from "react";
import "./Abs_PriceList.css";
const Abs_PriceList = (props) => {
    const{id,name,disp,varient,grade,pack,liter_Kg,rateprice,rate_ctn}=props;
  return (
    <>
      <tr >
        <th scope="row">{id}</th>
        <td>
          <div className="discription">
            <div className="inner-disp">
             <div> {name}</div> {disp}
            </div>
            <div className="pr-2">
            {varient}
            </div>
          </div>
        </td>
        <td>{grade}</td>
        <td>{pack}</td>
        <td>{liter_Kg}</td>
        <td>{rateprice}</td>
        <td>{rate_ctn}</td>
      </tr>
    </>
  );
};
export default Abs_PriceList;