import React, { useEffect, useState } from "react";
import "./Login.css";
import lubioil from "../../Assestes/photos/lubioil.png";
import logo from "../../Assestes/photos/lubi.jpg";
import { useNavigate } from "react-router-dom";
import { Act_Login } from "../../redux/BusinessLogics/Authentications";
import { Rd_Login_Success } from "../../redux/reducers/UserAuth";
import { useDispatch } from "react-redux"



const Login = () => {
  const navigate=useNavigate();
    const dispatch=useDispatch();

  // function adminList(){
  //   let items =JSON.parse (localStorage.getItem('admin'));
  //   if (items) {
  //      return JSON.parse (localStorage.getItem('admin'));
  //      }
  //      else{
  //       return []
  //      }
  // }

  const [userName, setUserName] = useState("");
  const [passcode, setPassCode] = useState("");
  // const [admin, setAdmin] = useState(adminList());
  const handleLoginPage = (e) => {
    // e.preventDefault();
    // const newAdmin = [
    //   ...admin,
    //   {
    //     userName,
    //     passcode,
    //   },
    // ];
    // setAdmin(newAdmin);
  };
  // useEffect(() => {
  //   localStorage.setItem("admin", JSON.stringify(admin));
  // }, [admin]);


  const _loginFunction=()=>{
    Act_Login(()=>{
     navigate('/invoices');
    dispatch(
      Rd_Login_Success())
    });

    // localStorage.setItem('login',true);
    // navigate('/invoices');
    
  }
 
  // useEffect(()=>{
  //   let login =localStorage.getItem('login');
  //       if(login){
  //           navigate('/invoices')
  //       }
  //   },[]);

  return (
    <>
  
        <section className="login-bg ">
          <div className="container-fluid">
            <div className="row login-row">
              <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                <img src={lubioil} alt="image" className="img-fluid" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mb-4">
                <div className="d-flex form-log align-items-center">
                  <img src={logo} />
                  <h2>Lubricants</h2>
                </div>
                {/* <form onSubmit={handleLoginPage}> */}
                <div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      required
                      placeholder="User Name"
                      autoFocus
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      required
                      placeholder="Password"
                      value={passcode}
                      onChange={(e) => setPassCode(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input p-0"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label"> Remember Me </label>
                    </div>
                    <a href="#!">Forgot password?</a>
                  </div>
                  <button className="btn btn-primary btn-lg btn-block btn-dark w-100 "     
                  onClick={_loginFunction}>
                    Sign in
                  </button>
                  </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </section>
   
    </>
  );
};
export default Login;
