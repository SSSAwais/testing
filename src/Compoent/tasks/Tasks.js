import React, { useEffect, useState } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";

import Abs_TaskList from "../../AbstractComponent/Abs_TaskList/Abs_TaskList";
import "./Tasks.css";
import TaskForm from "../task/TaskForm";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
import { LS_NUMBEROF_LISTS, LS_TASK_DATA } from "../../redux/consts";
import Pagination from "../../AbstractComponent/paginationtabs/Paginations";
const Tasks = () => {
  const [pageList,setPageList]=useState(LS_NUMBEROF_LISTS);
  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");
  const [list, setList] = useState(lsGetItem(LS_TASK_DATA));
  const [editId, setEditId] = useState("");
  const handleTask = (e) => {
    const newList = [
      ...list,
      {
        id:list.length + 1,
        startDate,
        task,
        detail,
        endtDate,
      },
    ];
    setList(newList);
    setTask("");
    setDetail("");
    setStartDate("");
    setEndDate("");

    
    

  };

  useEffect(() => {
    lsSetItem(LS_TASK_DATA, list);
  }, [list]);
  return (
    <>
      <section className="task-section">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 text-center mb-4">
              <Abs_Heading heading="Task" />
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
                  Add Task
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
                  View Task
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
                <TaskForm updateTask={(data) => setList(data)} />
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
                      <th scope="col">Start Date</th>
                      <th scope="col">Title</th>
                      <th scope="col">TitleDetail</th>
                      <th scope="col">End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((e, idx) => {
                      if (e.id == editId) {
                        return (
                          <tr className="taskListsTable" data-aos="fade-up">
                            <td colSpan={7}>
                              <TaskForm
                                updateTask={(data) => {
                                  setEditId("");
                                }}
                              />
                            </td>
                          </tr>
                        );
                      } else {
                        return (
                          <Abs_TaskList
                            key={idx}
                            id={e.id}
                            startDate={e.startDate}
                            task={e.task}
                            detail={e.detail}
                            endtDate={e.endtDate}
                            pressDlt={() => {
                              setList(list.filter((ele) => ele.id !== e.id));
                            }}
                            editPress={() => setEditId(e.id)}
                          />
                        );
                      }
                    })}
                  </tbody>
                </table>
                <Pagination/>
              </div>
            </div>
            {/* <!-- Tabs content --> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Tasks;
