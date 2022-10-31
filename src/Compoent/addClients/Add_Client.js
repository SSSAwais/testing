import React, { Component, useEffect, useState } from "react";
import "./Add_Client.css";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_ClientList from "../../AbstractComponent/Abs_ClientList/Abs_ClientList";
import ClientForm from "../clients/ClientForm";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
import { LS_CLIENT_DATA, LS_NUMBEROF_LISTS } from "../../redux/consts";
import Pagination from "../../AbstractComponent/paginationtabs/Paginations";
const AddClient = () => {
  const [pageList,setPageList]=useState(LS_NUMBEROF_LISTS);
  function getUsers() {
    const users = localStorage.getItem("userData");
    if (users) {
      return JSON.parse(localStorage.getItem("userData"));
    } else {
      return [];
    }
  }

  const [userData, setUserData] = useState(lsGetItem(LS_CLIENT_DATA));

  const [editId, setEditId] = useState("");

  useEffect(() => {
    lsSetItem(LS_CLIENT_DATA, userData);
  }, [userData]);

  return (
    <>
      <section className="addclient">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 head text-center">
              <Abs_Heading heading="Client" />
            </div>
          </div>

          {/* <!-- Tabs navs --> */}
          <ul className="nav nav-tabs mb-3" id="myTab0" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#home0"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Add Clients
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#profile0"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                View Client List
              </button>
            </li>
          </ul>
          {/* Tabs navs  */}

          {/* Tabs content  */}
          <div className="tab-content" id="myTabContent0">
            <div
              className="tab-pane fade show active"
              id="home0"
              role="tabpanel"
              aria-labelledby="home-tab0"
            >
              <ClientForm updateClient={(data) => setUserData(data)} />
            </div>
            <div
              className="tab-pane fade"
              id="profile0"
              role="tabpanel"
              aria-labelledby="profile-tab0"
            >
              <table className="table table-bordered table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Client Name</th>
                    <th scope="col">Shop Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Number</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((e, idx) => {
                    if (e.id == editId) {
                      return (
                        <tr className="clientsListTable" data-aos="fade-up">
                          <td colSpan={6}>
                            <ClientForm
                              updateClient={(data) => {
                                setEditId("");
                              }}
                            />
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <Abs_ClientList
                          key={idx}
                          id={e.id}
                          clientName={e.clientName}
                          number={e.number}
                          address={e.address}
                          shop={e.shop}
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
          {/* Tabs content  */}
        </div>
      </section>
    </>
  );
};
export default AddClient;
