import React, { Component } from 'react';

const Abs_miniTable =(props)=>{
const{firstVal,secondVal,thirdVal}=props;
    return(

        <>
        <table className='table text-center nested-table m-0'>
            <tr>
                <td >{firstVal}</td>
                <td >{secondVal}</td>
                <td>{thirdVal}</td>
            </tr>
        </table>
        </>

    )


}
export default Abs_miniTable;