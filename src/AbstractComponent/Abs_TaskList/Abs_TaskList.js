import React, { Component } from "react";
const Abs_TaskList = (props) => {
  const { id,startDate,task,detail,endtDate,pressDlt,editPress } = props;
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{startDate}</td>
        <td>{task}</td>
        <td>{detail}</td>
        <td>{endtDate}</td>
        <td><i className="fa-solid fa-circle-minus" onClick={pressDlt}></i></td>
        <td><i className="fa-solid fa-file-pen" onClick={editPress}></i></td>
      </tr>
    </>
  );
};
export default Abs_TaskList;
