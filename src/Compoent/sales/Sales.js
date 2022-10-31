import React, { Component, useState } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_ReturnSale from "../../AbstractComponent/Abs_ReturnSale/Abs_ReturnSale";
import "./Sales.css";
const Sales = () => {
  const [itemCode, setItemCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [invoiceNumber, setInvoienumber] = useState("123456");
  const [customerName, setCustomerName] = useState("ABC CUSTOMER");
  const [checked,setChecked]=useState(false);
  const [listReturn,setListReturn]=useState([

  ]);


  const [returnSale, setReturnSale] = useState([
    {
      id: "1",
      itemCode: "Kixxs",
      quantity: "2",
      rate: "130",
      amount: "500",
    },
    {
      id: "2",
      itemCode: "Total",
      quantity: "10",
      rate: "130",
      amount: "500",
    },
    {
      id: "3",
      itemCode: "PSo",
      quantity: "8",
      rate: "130",
      amount: "500",
    },
  ]);
  const markcheck=(id)=>{
    // setChecked(!checked); 
 const abc=   returnSale.filter((ele) => ele.id =id)
    
    console.log("==> ()",abc)
}

  const onchangeFunciotn = (data) => {};
  return (
    <>
      <section className="">
        <div className="first-sales-section">
          <div className="container">
            <div className="row heading-row sales-section justify-content-center">
              <div className="col-lg-12 text-center ">
                <Abs_Heading heading="Sales" />
              </div>
            </div>
            <div className="row sales-section ">
              <div className="col-lg-12 ">
                <div className="d-flex justify-content-center">
                  <p>
                    <span>From :</span>
                    <Abs_Input type="date" />
                  </p>
                  <p className="px-2">
                    <span>To :</span>
                    <Abs_Input type="date" />
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Tabs navs --> */}
            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="ex1-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-1"
                  role="tab"
                  aria-controls="ex1-tabs-1"
                  aria-selected="true"
                >
                  Sales
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-2"
                  role="tab"
                  aria-controls="ex1-tabs-2"
                  aria-selected="false"
                >
                  Sales Return
                </a>
              </li>
            </ul>
            {/* <!-- Tabs navs --> */}
            {/* <!-- Tabs content --> */}
            <div className="tab-content" id="ex1-content">
              <div
                className="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <table className="table w-100 table-bordered table-sm">
                  <thead>
                    <tr className="text-center">
                      <th>#</th>
                      <th>Invoice Number</th>
                      <th>Date</th>
                      <th>Total Price</th>
                      <th>Items Sold</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                {/* sales return customer and invoice section starts here*/}
                
                <h5>Customer Current Invoice</h5>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Customer Name</td>
                      <td>
                        <Abs_Input
                          type="text"
                          classN="w-100"
                          disabled
                          val={customerName}
                          changeFunc={(e) => setCustomerName(e.target.value)}
                        />
                      </td>
                      <td>Inovice Number:</td>
                      <td>
                        <Abs_Input
                          classN="w-100"
                          val={invoiceNumber}
                          changeFunc={(e) => setInvoienumber(e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* sales return customer and invoice section ends here*/}
                <div className=" sale_return_section">
                  <div className="">
                <table className="table w-100 table-bordered table-sm">
                  <thead>
                    <tr className="text-center">
                      <th>#</th>
                      <th>Item Code</th>
                      <th>Quantity</th>
                      <th>Rate</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {returnSale.map((e, idx) => (
                     <Abs_ReturnSale
                      key={idx}
                      returnSale={returnSale}
                      markcheck={markcheck}
                      id={e.id}
                      itemCode={e.itemCode}
                      quantity={e.quantity}
                      rate={e.rate}
                      amount={e.amount}
                      checked={checked}
                      setChecked= {setChecked}
                      setListReturn={setListReturn}
                      listReturn={listReturn}
                      // handleDlt={() => {
                      //   setReturnSale(
                      //     returnSale.filter((ele) => ele.id !== e.id)
                      //   );
                      // }}
                      // pressDlt={() => {
                      //   setList(
                      //     list.filter((ele) => ele.id !== e.id)
                      //   );
                      // }}
                      />
                    ))}
                  </tbody>
                </table>
                </div>
                <h5>Return Sale</h5>
                <div className="sales-return-section">
                {/* <table className="table table-bordered">
                  <thead>
                    <tr>
                      <td>Customer Name:</td>
                      <td>
                        <Abs_Input val={customerName} classN="w-100" />
                      </td>
                      <td>Invoice Number:</td>
                      <td colSpan={2}>
                        <Abs_Input val={invoiceNumber} classN="w-100" />
                      </td>
                    </tr>
                  </thead>
                  </table> */}
                  <table className="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item Code</th>
                      <th>Quantity</th>
                      <th>Rate</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      listReturn.map((e,idx)=>(
                     
                          <tr key={idx}>
                            <td>{e.id}</td>
                            <td>{e.itemCode}</td>
                            <td>{e.quantity}</td>
                            <td>{e.rate}</td>
                            <td>{e.amount}</td>
                           
                          </tr>
                      
                      ))
                    }
                  </tbody>
                  </table>
                </div>
                </div>
              </div>
            </div>
            {/* <!-- Tabs content --> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Sales;
