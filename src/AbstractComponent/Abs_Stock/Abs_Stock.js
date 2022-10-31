import React, { Component } from 'react';
const Abs_Stock=(props)=>{
    const {productid,productname,productcategory,unitprice,totalprice}=props;
    return(
        <>
        <tr>
            <td>{productid}</td>
            <td>{productname}</td>
            <td>{productcategory}</td>
            <td>{unitprice}</td>
            <td>{totalprice}</td>
        </tr>
        </>
    )
}
export default Abs_Stock