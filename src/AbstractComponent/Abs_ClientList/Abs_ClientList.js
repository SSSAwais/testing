import React, { Component } from "react";
const Abs_ClientList = (props) => {
  const { id, clientName, number, address, shop ,editPress} = props;

  return (
    <>

        <tr>
          <th scope="row">{id}</th>
          <td>{clientName}</td>
          <td>{number}</td>
          <td>{address}</td>
          <td>{shop}</td>
          <td><i className="fa-solid fa-file-pen" onClick={editPress}></i></td>
        </tr>
    
    </>
  );
};
export default Abs_ClientList;
