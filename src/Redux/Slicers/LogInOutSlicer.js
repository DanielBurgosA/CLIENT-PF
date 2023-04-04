import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "js-cookie";


const initialState = {
    status: localStorage.getItem("value") ? true : false,
    user: {},
}

export const userLogIn = createAsyncThunk(
    "LogIn/postUserLogIn",
    async (data) => {
        try {
            const verify = await axios.post(`/login`, data);
            console.log(verify.data)
            return verify.data;
        } catch (error) {
            console.log(error)
        }
    });

export const userGoogleLogin = createAsyncThunk(
    "LogIn/getUserGoogleLogIn",
    async () => {
        try {
            const verify = await axios.get(`/google/token`);
            return verify.data;
        } catch (error) {
            console.log(error)
        }
    });

export const logOutGoogle = createAsyncThunk(
    "logOut/getLogOutGoogle",
    async () => {
        try {
            const res = await axios.get("/logOut/google")

            return res.data
        } catch (error) {
            console.log(error.message)
        }
    }

)

export const getUser = createAsyncThunk("userDashboard/getUser", async () => {
    axios.interceptors.request.use((req) => {
        const token = localStorage.getItem("value");
        req.headers.authorization = `Bearer ${token}`;
        return req;
    });
    const res = await axios.get(`/user`);

    return res.data;
});

const logInSlicer = createSlice({
    name: "login",
    initialState,
    reducers: {
        logOutLocal(state) {

            localStorage.removeItem("value");
            localStorage.removeItem("origin");
            localStorage.removeItem("rol");
            state.status = false;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(userLogIn.fulfilled, (state, action) => {
                console.log("eso",action.payload)
                if (action.payload.success === true) {
                    localStorage.setItem("value", action.payload.token);
                    localStorage.setItem("origin", action.payload.origin);
                    action.payload.rol && localStorage.setItem("rol", action.payload.rol);
                    
                    state.user = action.payload.userFix
                    state.status = true;
                } else {
                    state.status = false;
                }
            })

            .addCase(userGoogleLogin.fulfilled, (state, action) => {
                if (action.payload.token) {
                    localStorage.setItem("value", action.payload.token)
                    localStorage.setItem("origin", action.payload.origin)
                    console.log("este es mi console", action.payload);
                    state.user = action.payload.user
                    state.status = true;
                    
                } else {
                    state.status = false;
                }
            })

            .addCase(logOutGoogle.fulfilled, (state, action) => {
                localStorage.removeItem("value")
                localStorage.removeItem("origin")
                state.status = false
                state.user = {}
            })

            .addCase(getUser.fulfilled, (state, action) => {
                console.log("este es", action.payload);
                state.user = action.payload;
                
            })
    }


})


export const { logOutLocal } = logInSlicer.actions;

export default logInSlicer.reducer;