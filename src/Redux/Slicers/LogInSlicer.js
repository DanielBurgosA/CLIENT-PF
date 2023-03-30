import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "js-cookie";


const initialState = {
    status: Cookie.get("success")? true: false
}

export const userLogIn = createAsyncThunk(
    "LogIn/postUserLogIn",
    async (data) => {
        try {
            const response = await fetch(`https://pf-api-production.up.railway.app/login`, {mode:"cors", credentials:"include", method:"POST", headers:{"Content-Type": "application/json"}, body:JSON.stringify(data) });
            const verify = await response.json();
            console.log(verify);
            return verify;
        } catch (error) {
            console.log(error)
        }
    });

// export const userLogInGoogle = createAsyncThunk(
//     "LogInGoogle/getGoogleLogIn",
//     async (data) => {
//         try {
//             const res = await axios.get(`/auth/google`);
//             console.log(res)
//             return res.data;
//         } catch (error) {
//             console.log(error)
//         }
//     });


const logInSlicer = createSlice({
    name: "login",
    initialState,
    reducers: {
        verifyStatus(state, action) {
            const LogInStatus = Cookie.get("value");
            console.log(LogInStatus)
            if (LogInStatus) {
                state.status = true;
            } else {
                state.status = false;
            }
            
        },

    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(userLogIn.fulfilled, (state, action) => {
    //             if (action.payload.success === true ){
    //                 state.status = true;
    //                 window.location.href="https://pf-api-production.up.railway.app/login";
    //             }else {
    //                 state.status = false
    //             }
    //         })
    // }


})

export const { verifyStatus } = logInSlicer.actions;

export default logInSlicer.reducer;