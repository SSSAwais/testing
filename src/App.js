import "./App.css";
import MainFile from "./Compoent/MainFile/MainFile";
import Header from "./Compoent/Header/Header";

import SidebarMenu from "./Compoent/MenuSideBar/MenuSidebar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const isLoged = useSelector((state) => state.UserAuth.isLogedIn);
  useEffect(() => {
    console.log(isLoged, "login called");
  }, [isLoged]);

  return (
    <>
    <div className="Main_App"> 
      <Header />
      <div className="content">
        {isLoged ? <SidebarMenu /> : ""}

        <MainFile />
      </div>
      </div>
      <div className="error_msg_mobile">
        <h2>
          Resolution Not Supported
        </h2>
      </div>
    </>
  );
}

export default App;
