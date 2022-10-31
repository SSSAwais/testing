import React, { Component } from "react";
import './ErrorPage.css';
import error from '../../Assestes/photos/error.png'
const ErrorPage = () => {
  return (
    <>
    <section className="error_page text-center">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="section_404">
                   <img src={error} alt="error" className="img-fluid"/>
                   <h4 className="heading_error">Page Not Found</h4>
                </div>
            </div>

        </div>
    </div>  
    </section>
     
    </>
  );
};
export default ErrorPage;
