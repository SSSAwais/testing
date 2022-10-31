import React, { Component, useEffect, useState } from "react";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import { LS_TASK_DATA } from "../../redux/consts";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
const TaskForm = ({ updateTask }) => {
  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");
  const [list, setList] = useState(lsGetItem(LS_TASK_DATA));
  const [message, setMessage] = useState(false);
  const [loading,setLoading]=useState(false)
  const fetchData=()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }

  useEffect(() => {
    lsSetItem(LS_TASK_DATA, list);
  }, [list]);

  const onSubmitTaskHandlers = (e) => {
    e.preventDefault();

    const newList = [
      ...list,
      {
        id: list.length + 1,
        startDate,
        task,
        detail,
        endtDate,
      },
    ];
    if (startDate == "" || task == "" || detail == "" || endtDate == "") {
      setMessage(true);
    } else {
      setMessage(false);
      updateTask(newList);

      setStartDate("");
      setTask("");
      setDetail("");
      setEndDate("");
    }

    // const handleTask = (e) => {
    //   const newList = [
    //     ...list,
    //     {
    //       id:list.length + 1,
    //       startDate,
    //       task,
    //       detail,
    //       endtDate,
    //     },
    //   ];
    // setTask("");
    // setDetail("");
    // setStartDate("");
    // setEndDate("");

    // updateTask(newList);
  };

  return (
    <>
      <form onSubmit={onSubmitTaskHandlers}>
        <div className="row justify-content-center text-end">
          <div className="col-lg-3">
            <div className="task_information_section">
              <span>To </span>
              <Abs_Input
                val={startDate}
                changeFunc={(e) => setStartDate(e.target.value)}
                type="date"
                placeholder="Enter the Task Title"
                classN="w-75 mb-2 "
              />
              {message && !startDate && (
                <div>
                <p className="m-0 Data task_error_msg">
                  Please Enter Start Date
                </p>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-3 text-start">
            <div className="task_information_section2">
              <span>From </span>
              <Abs_Input
                val={endtDate}
                changeFunc={(e) => setEndDate(e.target.value)}
                type="date"
                placeholder="Enter the Task Title"
                classN="w-75 mb-1"
              />
              {message && !endtDate && (
                <div className="mb-3">
                <p className="m-0 Data task_error_msg2">
                  Please Enter End Date
                </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-column justify-content-center align-items-center mb-3 mt-3 task_information_section3">
              <Abs_Input
                type="text"
                placeholder="Enter the Task Title"
                classN="w-50 mb-2 form-control"
                val={task}
                changeFunc={(e) => setTask(e.target.value)}
              />
              {message && !task && (
                <div className="mb-3">
                <p className="m-0 Data task_error_msg3">Please Enter Task Detail</p>
                </div>
              )}

              <textarea
                className="form-control mb-2 w-50"
                rows="4"
                placeholder="Enter the Detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              ></textarea>
              {message && !detail && (
                <div className="mb-3">
                <p className="m-0 Data task_error_msg4">Please Enter Task Detail</p>
                </div>
              )}

              <Abs_Button title="Add Task" isLoading={loading} handleSpinner={fetchData}
             
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default TaskForm;
