import React, { useEffect, useState } from "react";
import "./MenuSideBar.css";
import { Link,NavLink } from "react-router-dom";

import { MenuData } from "../Header/MenuData";

import "./MenuSideBar.css";

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sidebar">
        <div className={`${open ? "sidebar_items" : "sidebar_items_2"}`}>
          <div className="icons">
            <i
              className="fa-solid fa-angle-left"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
       
        <ul className="navigation_list">
          {MenuData.map((value, index) => {
            return (
              <li key={index} title={value.title}>
                      <NavLink to={value.path}>
                  {value.icon}
                  <span className={`${!open && "hidden"}`}>{value.name}</span>
                  
              </NavLink>
                </li>
            );
          })}
        </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
