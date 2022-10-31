import React, { Component, useState, useEffect } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import "./Expenses.css";
import Abs_Expenselist from "../../AbstractComponent/Abs_Expenselist/Abs_Expenselist";
import ExpenseForm from "../expnese/ExpenseForm";
import { LS_EXPENSE_DATA, LS_NUMBEROF_LISTS } from "../../redux/consts";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
import Pagination from "../../AbstractComponent/paginationtabs/Paginations";
const Expenses = () => {
  const [pageList,setPageList]=useState(LS_NUMBEROF_LISTS);
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDetail, setExpenseDetail] = useState("");
  const [expDate, setExpDate] = useState("");
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState(lsGetItem(LS_EXPENSE_DATA));
  const [expenseId, setExpenseId] = useState("");
  // const handleExpense = (e) => {
  //   const newExpense = [
  //     ...expense,
  //     {
  //       id: expense.length + 1,
  //       expDate,
  //       expenseTitle,
  //       amount,
  //       expenseDetail,
  //     },
  //   ];
  //   setExpense(newExpense);
  //   setExpDate("");
  //   setExpenseTitle("");
  //   setExpenseDetail("");
  //   setAmount("");
  // };
  useEffect(() => {
    lsSetItem(LS_EXPENSE_DATA, expense);
  }, [expense]);
  return (
    <>
      <section className="expneses">
        <div className="first-expense-section">
          <div className="container">
            <div className="row heading-row sales-section justify-content-center">
              <div className="col-lg-12 text-center ">
                <Abs_Heading heading="Expense" />
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
                  Add Expense
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
                  View Expense List
                </a>
              </li>
            </ul>
            {/* <!-- Tabs navs --> */}
            <div className="tab-content" id="ex1-content">
              <div
                className="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <ExpenseForm updateExpense={(data) => setExpense(data)} />
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                <table className="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Date</th>
                      <th scope="col">Title</th>
                      <th scope="col">Amount</th>
                      <th scope="col">ExpenseDetail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expense.map((e, idx) => {
                      if (e.id == expenseId) {
                        return (
                          <tr className="expense_tabless" data-aos="fade-up">
                            <td colSpan={7}>
                              <ExpenseForm
                                updateExpense={(data) => {
                                  setExpenseId("");
                                }}
                              />
                            </td>
                          </tr>
                        );
                      } else {
                        return (
                          <Abs_Expenselist
                            key={idx}
                            id={e.id}
                            expDate={e.expDate}
                            expenseTitle={e.expenseTitle}
                            amount={e.amount}
                            expenseDetail={e.expenseDetail}
                            pressDlt={() => {
                              setExpense(
                                expense.filter((ele) => ele.id !== e.id)
                              );
                            }}
                            editPress={() => setExpenseId(e.id)}
                          />
                        );
                      }
                    })}

                    {/* {expense.map((e, idx) => (
                      <Abs_Expenselist
                        key={idx}
                        id={e.id}
                        expDate={e.expDate}
                        expenseTitle={e.expenseTitle}
                        amount={e.amount}
                        expenseDetail={e.expenseDetail}
                        pressDlt={() => {
                          setExpense(
                            expense.filter((ele) => ele.id !== e.id)
                          );
                        }}
                      />
                    ))} */}
                  </tbody>
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
export default Expenses;
