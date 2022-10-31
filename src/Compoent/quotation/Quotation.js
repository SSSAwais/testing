import React, { Component, useEffect, useState } from "react";
import Table_Row from "../../AbstractComponent/tablerow/Table_Row";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_miniTable from "../../AbstractComponent/Abs_miniTable/Abs_miniTable";
import './Quotation.css'
const Quotation = () => {
  const [name, setName] = useState("Makkah Oil ");
  const [address, setAddress] = useState();
  const [town, setTown] = useState();
  const [area, setArea] = useState();
  const [zone, setZone] = useState();
  const [invoice, setInvoice] = useState();
  const [date, setDate] = useState();
  const [value, setValue] = useState("Dummy Text Added");
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
                  <Abs_Heading heading="Quotation" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 ">
                <div className="">
                  <table className="table table-bordered table-sm">
                    <thead>
                      <tr>
                        <td>Customer Name: </td>
                        <td colSpan={3}>
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-100"
                          />
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Address:</td>
                        <td>
                          {" "}
                          <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-100"
                          />
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
                      <tr>
                        <td>Teritory:</td>
                        <td>
                          {" "}
                          <input
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            className="w-100"
                          />
                        </td>
                        <td>Zone:</td>
                        <td>
                          <input
                            value={zone}
                            onChange={(e) => setZone(e.target.value)}
                            className="w-100"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-4">
                <table className="table table-bordered table-sm">
                  <tbody>
                    <tr>
                      <td>Sales Invoice:</td>
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
                      <th>Sale</th>
                      <th>sales</th>
                      <th>Discount</th>
                      <th>Net Amount</th>
                      <th>Free Quantity</th>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <Abs_miniTable firstVal="Packs" secondVal="Pieces" />
                      </td>
                      <td>
                        <Abs_miniTable firstVal="Rate" />
                      </td>
                      <td>
                        <Abs_miniTable firstVal="Value" />
                      </td>
                      <td>
                        <Abs_miniTable
                          firstVal="%"
                          secondVal="Fixed"
                          thirdVal="Amount"
                        />
                      </td>
                      <td>
                        <Abs_miniTable firstVal="Receivables" />
                      </td>
                      <td>
                        <Abs_miniTable firstVal="Packs" 
                        secondVal="Pieces"
                        />
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                  <tr>
                    <td></td>
                    <td>Total</td>
                    <td>
                      <Abs_miniTable firstVal="0" secondVal="0" />
                    </td>
                    <td>
                      <Abs_miniTable firstVal="0" />
                    </td>
                    <td>
                      <Abs_miniTable firstVal="0" />
                    </td>
                    <td>
                      <Abs_miniTable firstVal="0" secondVal="0" thirdVal="0" />
                    </td>
                    <td >
                      <Abs_miniTable firstVal="0" />
                    </td>
                    <td>
                      <Abs_miniTable firstVal="0"  secondVal="0"/>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="rupe-val">
                  <p>
                    <span>Rupees:</span>
                    {value}
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <table className=" ">
                  <tr>
                    <td>Total Value</td>
                    <td colSpan={3}>
                      <Abs_Input type="readOnly" />
                    </td>
                  </tr>
                 
                 
                  
                  
                </table>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};
export default Quotation;
