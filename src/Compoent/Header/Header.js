import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../Assestes/photos/lubi.jpg";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";

import SidebarMenu from "../MenuSideBar/MenuSidebar";
import { Rd_Logout } from "../../redux/reducers/UserAuth";
import { Act_Logout } from "../../redux/BusinessLogics/Authentications";
import MyUserClass from "../../redux/BusinessLogics/User";

const Header = () => {
  const isLoged = useSelector((state) => state.UserAuth.isLogedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const myUser = MyUserClass.userData();
  const [toogle, setToogle] = useState(false);
  const handleLoginEvent = () => {
    setLogin(!login);
   

    navigate("/login");
  };
  const handleLoginEvent2 = () => {
    Act_Logout(dispatch(Rd_Logout()));
    setToogle(!toogle);
    // setLogin(false);
    // localStorage.clear();
    // navigate('/login');
  };

  return (
    <>
     
   
     
        <header className="header-section">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4">
                <div className="d-flex align-items-center">
                  <div className="logo-view">
            
                    <img src={logo} alt="logo" />
                  
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 text-end">
                <ul>
                {
                    isLoged? <li>
                    <NavLink to="login" onClick={handleLoginEvent2}>
                      {myUser.name} (logout)
                    </NavLink>
                  </li>: <li>
                    <NavLink to="/" onClick={handleLoginEvent2}>
                    login
                    </NavLink>
                  </li>
                  }
                  <li>
                
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      
    </>
  );
};
export default Header;
