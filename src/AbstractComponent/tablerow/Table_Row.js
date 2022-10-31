import React, { Component } from "react";

const Table_Row = (props) => {
  const { id, productsName, unitcost, unitprice, qty, pressDlt, updateData,qtyPacks ,qtypcs} =
    props;

  const _update = () => {
    console.log("Update Event trggreed");
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{productsName}</td>
        <td>
            <td>{qtyPacks}</td>
            <td>{qtypcs}</td>
        </td>
        <td>{unitprice}</td>
        <td>{qty}</td>
        <td>
          <div className="d-flex justify-content-around">
            <i className="fa-solid fa-circle-minus" onClick={pressDlt}></i>
            <i className="fa-solid fa-pen" onClick={updateData}></i>
          </div>
        </td>
      </tr>
    </>
  );
};
export default Table_Row;
