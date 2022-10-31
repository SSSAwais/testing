import React, { Component, useState } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Stock from "../../AbstractComponent/Abs_Stock/Abs_Stock";
import Pagination from "../../AbstractComponent/paginationtabs/Paginations";
import { LS_NUMBEROF_LISTS } from "../../redux/consts";
import "./Stock.css";
const Stock = () => {
  const [pageList,setPageList]=useState(LS_NUMBEROF_LISTS);
    const[stock,setStock]=useState([
        {
            productid:"1",
            productname:"KIxxs",
            productcategory:"abs",
            unitprice:"1",
            totalprice:"50"
        }
    ]);
  return (
    <>
      <section className="stock">
        <div className="first-stock-section">
          <div className="container">
            <div className="row heading-row sales-section justify-content-center">
              <div className="col-lg-12 text-center ">
                <Abs_Heading heading="Stock" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <table className="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Unit Price</th>
                      <th>Stock Amount</th>
                    </tr>
                  </thead>
                  <thead>
                    {
                        stock.map((e,idx)=>
                        <Abs_Stock
                        key={idx}
                        productid={e.productid}
                        productname={e.productname}
                        productcategory={e.productcategory}
                        unitprice={e.unitprice}
                        totalprice={e.totalprice}
                        
                        />
                        )
                    }
                  </thead>
                </table>
                <Pagination/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Stock;
