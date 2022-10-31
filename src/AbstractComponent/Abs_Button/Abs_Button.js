import React, { Component, useState } from 'react';
import './Abs_Button.css';

const Abs_Button=(props)=>{
    const {title,changeValue, buttonHide,handleSpinner,isLoading}=props;
    // const [isLoading,setIsLoading]=useState(false);
   
    return(

        <>
        <div className='btn_add'>
                <button onClick={handleSpinner}  onChange={changeValue}>
                    {
                        isLoading ?<i className="fa-solid fa-arrows-rotate"></i>:title 
                    }
                </button>
        </div>
        </>


    )


}
export default Abs_Button