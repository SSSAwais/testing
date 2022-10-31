import React, { Component, useEffect, useState } from "react";
import Table_Row from "../../AbstractComponent/tablerow/Table_Row";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_miniTable from "../../AbstractComponent/Abs_miniTable/Abs_miniTable";
import "./CashInvoice.css";
const CashInvoices = () => {
  const [name, setName] = useState("Makkah Oil ");
  const [address, setAddress] = useState("Faisalabad");
  const [town, setTown] = useState("Faisalabad");
  const [area, setArea] = useState();
  const [zone, setZone] = useState();
  const [invoice, setInvoice] = useState();
  const [date, setDate] = useState();
  const [value, setValue] = useState("Dummy Text Added");
  const [totalamount,setTotalAmount]=useState("xyz");
  const [cashRef,setCashRef]=useState("123");
  function getItems() {
    const item = localStorage.getItem("productData");

    if (item) {
      return JSON.parse(localStorage.getItem("productData"));
    } else {
      return [];
    }
  }

  const [toogle, setToogle] = useState(true);
  const [tableData, setTableData] = useState(getItems());
  const _heandleSearcedValue = () => {
    console.log("Hello i m ok function");
    setToogle(!toogle);
  };
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const _handleSearchValue = (e) => {
    setSearch(search);
    setToogle(!toogle);

    return tableData.filter((e) => {
      const localfilter = e.ProductName.trim();
      const searchable = search.trim();

      if (localfilter == searchable) {
        setIsSearch(true);
        setSearchResult([e]);
      } else {
        return "";
      }
    });
  };

  function _getData() {
    if (isSearch) {
      return searchResult;
    } else {
      return tableData;
    }
  }
  const _addProduct = () => {
    console.log("Add Product Button in triggred");
  };

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(tableData));
  }, [tableData]);
  return (
    <>
      <section className="">
        <div className="first-inventory-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="button-n-secName d-flex justify-content-center align-items-center mb-4 pt-4">
                  <Abs_Heading heading="Cash Invoice" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-12 ">
                <div className="">
                  <table className="table table-bordered table-sm">
                    <thead>
                      <tr>
                        <td>Customer Name: </td>
                        <td colSpan={3}>
                          <input value={name} className="w-100" />
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Address:</td>
                        <td>
                          {" "}
                          <input value={address} className="w-100" />
                        </td>
                        <td>Town:</td>
                        <td>
                          <input
                            value={town}
                            onChange={(e) => setTown(e.target.value)}
                            className="w-100"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <table className="table table-bordered table-sm">
                  <tbody>
                    <tr>
                      <td>Cash Invoice:</td>
                      <td>
                        <input
                          value={invoice}
                          onChange={(e) => setInvoice(e.target.value)}
                          className="w-100"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Date:</td>
                      <td>
                        <input
                          type="date"
                          className="w-100"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Price List Ref #</td>
                      <td>
                        {cashRef}
                      {/* <input
                          readOnly
                          type="number"
                          className="w-100"
                          value={cashRef}
                      /> */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="items-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <table className="table w-100 text-center main-table table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Products</th>
                      <th>Qty</th>
                      <th>Discount</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>1</td>
                        <td>Kixxs Oil</td>
                        <td>10</td>
                        <td>100</td>
                        <td>2000</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-lg-7 col-md-7">
              
              </div>
              <div className="col-lg-5 col-md-5 ">
                <table className=" tablet_view_table_cashinvoice">
                  <tr>
                    <td>Total Amount</td>
                    <td>
                      <Abs_Input readOnly val={totalamount} />
                    </td>
                  </tr>
                 
                </table>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-11">
                <p className="d-flex align-items-cneter remarks">
                  <span>Address:</span> <Abs_Input type="text" classN="w-100" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CashInvoices;
