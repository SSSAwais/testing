import React, { Component, useEffect } from 'react';
import { useNavigate,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateComp=(props)=>{
    const isLoged=useSelector(state=>state.UserAuth.isLogedIn);

    const {Component}=props;
    const navigate=useNavigate();
    useEffect(()=>{
    // let login =localStorage.getItem('login');
        if(!isLoged){
            // navigate('/login')
        }
    },[isLoged]);
    return (
        <>
        <Component/>
        </>
    )
}
export default PrivateComp;