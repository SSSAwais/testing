// import { useDispatch } from "react-redux"
// import {Rd_Login_Success} from '../reducers/UserAuth' 
// import { useNavigate } from "react-router-dom";
export const Act_Login=(onSuccess)=>{
    // const navigate=useNavigate();
    // const dispatch=useDispatch();

    // dispatch(
    //     Rd_Login_Success()

    // )
    // navigate('/invoices');
    onSuccess();

}

export const Act_Logout=(onSuccess)=>{
    onSuccess();

}