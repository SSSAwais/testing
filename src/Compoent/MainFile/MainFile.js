import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AddClient from "../addClients/Add_Client";
import AddProduct from "../addproduct/AddProduct";
import CashInvoices from "../cashinvoice/CashInvoice";
import Company from "../company/Company";
import Expenses from "../expenses/Expenses";
import HomePage from "../homepage/HomePage";
import Invoices from "../invoices/Invoices";
import Login from "../Login/Login";
import Payments from "../payments/Payments";
import PriceList from "../pricelist/PriceList";
import Quotation from "../quotation/Quotation";
import Sales from "../sales/Sales";
import Stock from "../stock/Stock";
import Tasks from "../tasks/Tasks";
import ErrorPage from "../errorpage/ErrorPage";
import BillingSlip from "../billingslip/BillingSlip";
import PrivateComp from "../PrivateCom/PrivateComp";

const MainFile = () => {
  // function adminList() {
  //   let items = JSON.parse(localStorage.getItem("admin"));
  //   if (items) {
  //     return JSON.parse(localStorage.getItem("admin"));
  //   } else {
  //     return [];
  //   }
  // }
  // const [admins, setAdmins] = useState(adminList());

  let navigate = useNavigate();

  
  return (
    <>
      <div className="context ">
        <Routes >
   
        {/* Public Pages starts here */}
          <Route path="/" element={<Login />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="billing" element={<BillingSlip/>} />
          {/* Public Pages starts here */}
          <Route path="invoices" element={<PrivateComp Component={Invoices} />} />
          <Route path="addproduct" element={<PrivateComp Component={AddProduct} />} />
          <Route path="addclient" element={<PrivateComp Component={AddClient} />} />
          <Route path="sales" element={<PrivateComp Component={Sales} />} />
          <Route path="tasks" element={<PrivateComp Component={Tasks} />} />
          <Route path="company" element={<PrivateComp Component={Company} />} />
          <Route path="quote" element={<PrivateComp Component={Quotation} />} />
          <Route path="pay" element={<PrivateComp Component={Payments} />} />
          <Route path="expense" element={<PrivateComp Component={Expenses} />} />
          <Route path="cash" element={<PrivateComp Component={CashInvoices} />} />
          <Route path="picelist" element={<PrivateComp Component={PriceList} />} />
          <Route path="stock" element={<PrivateComp Component={Stock} />} />
          <Route path="*" element={<ErrorPage/>} />
        
        </Routes>
      </div>
    </>
  );
};
export default MainFile;
