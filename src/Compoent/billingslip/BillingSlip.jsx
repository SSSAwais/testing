import React from "react";
import "./BillingSlip.css";

const BillingSlip = () => {
  return (
    <>
      <section>
        <div className="wrapper_mian_bill">
          <div className="top_order">
            <div className="invoice_number">
              <h4>Invoice</h4>
            </div>
          </div>
          <div className="second_order">
            <p>Jonathan </p>
            <p>101 E. Chapman Ave</p>
            <p>0300-1234567</p>
          </div>
          <div className="third_section">
                <div className="left_section">
                    <p>Some Company C/O Some Guy</p>
                </div>
                <div className="right_section">
                    <table className="table">
                        <thead>
                            <tr>
                                <th><span contenteditable>Invoice #</span></th>
                                <td><span contenteditable>12345</span></td>
                            </tr>  
                            <tr>
                                <th><span contenteditable>Date</span></th>
                                <td><span contenteditable>10-Sep-2022</span></td>
                            </tr>
                            <tr>
                                <th><span contenteditable>Amount Due</span></th>
                                <td><span contenteditable>90000</span></td>
                            </tr>
                        </thead>
                    </table>
                </div>
          </div>
          <div className="fourth_order">
             <table className="table">
                <thead>
                    <tr className="text-center">
                        <th>Item</th>
                        <th>Discription</th>
                        <th>Rate</th>
                        <th>Quantity</th>
                        <th>Price</th>
                       
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Front End </td>
                        <td>Testing</td>
                        <td className="text-end">100</td>
                        <td className="text-end">200</td>
                        <td className="text-end">40000</td>
                    </tr>
                </tbody>
             </table>  
             <a href="#" className="add">+</a>

          </div>
          <div className="fifth_section">
            <table className="table">
          <thead>
                            <tr>
                                <th><span contenteditable>Total</span></th>
                                <td className="text-end"><span contenteditable>12345</span></td>
                            </tr>  
                            <tr>
                                <th><span contenteditable>Amount Paid</span></th>
                                <td className="text-end"><span contenteditable>10000</span></td>
                            </tr>
                            <tr>
                                <th><span contenteditable>Balance Due</span></th>
                                <td className="text-end"><span contenteditable>90000</span></td>
                            </tr>
                        </thead>
                    </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default BillingSlip;
