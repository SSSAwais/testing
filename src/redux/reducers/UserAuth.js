import { createSlice } from "@reduxjs/toolkit";
import MyUserClass from "../BusinessLogics/User";
export const UserAuth=createSlice({
    name: "UserAuth",
    initialState:{
        user:MyUserClass.userData(),
        isLogedIn:false
    },
    reducers:{
            // Rd_Login:(state,action)=>{

            // },
            Rd_Login_Success:(state,action)=>{
                state.isLogedIn=true;
            },
            Rd_Logout: (state,action)=>{
                state.isLogedIn=false;
            },
    }
})
export const {
    Rd_Login_Success,
    Rd_Logout
  } = UserAuth.actions;
  export default UserAuth.reducer;

