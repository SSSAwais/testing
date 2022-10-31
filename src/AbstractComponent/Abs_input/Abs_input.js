import React, { Component } from 'react';
import './Abs_Input.css';

const Abs_Input=(props)=>{
const {events,changeFunc,type,classN,val,placeholder}=props;
return(

<>
<input  onClick={events} onChange={changeFunc} type={type} className={classN} value={val} placeholder={placeholder}/>
</>

)



}
export default Abs_Input