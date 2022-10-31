import React, { Component, useEffect, useState } from "react";

const Abs_Productlist = (props) => {
    const {id,ProductName,rowid,itemCategory,price,qty,carton,company,fixedValue,pressDlt, editPress,rowspan}=props;
const [li, setli] = useState(false);    

function abcd(){
  if( rowid + 1 < rowspan ){
    setli(true)
  }
}
useEffect(()=>{
  abcd();
},[]);

  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{ProductName}</td>
        {
          
          li  ? 
          <td rowSpan={rowspan} > {itemCategory} </td> 
          : !li && rowspan > 1 ? 
          ''
          : <td> {itemCategory} </td> 
        }
        <td>{price}</td>
        <td>{qty}</td>
        <td>{carton}</td>
        <td>{fixedValue}</td>
        <td>{company}</td>
        <td><i className="fa-solid fa-circle-minus" onClick={pressDlt}></i></td>
        {/* <td><i className="fa-solid fa-circle-minus" onClick={editPress}></i></td> */}
        <td><i className="fa-solid fa-file-pen" onClick={editPress}></i></td>
         
      </tr>
    </>
  );
};
export default Abs_Productlist;
