import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  payLink: "",
};

export const linkPaymentPlatform = createAsyncThunk(
  "paymentLink/linkPaymentPlatform",
  async (form) => {
    axios.interceptors.request.use(req => {
      
      const token = localStorage.getItem("value")
      req.headers.authorization =`Bearer ${token}`;
      return req;
    });
    try {
      const res = await axios.post(`/create-payment`, form);
      return res.data;
    } catch (error) {
      console.log(error.message)
    }
  }
);

const paymentSlicer = createSlice({
    name: "paymentLink",
    initialState,
    reducers:{
      cleanLink(state, action) {
        state.payLink = "";
      },
    },
    extraReducers: (builder) => {
      builder
      .addCase(linkPaymentPlatform.fulfilled, (state, action) => {
        state.payLink = action.payload.data.links[1].href;
      });
    },
  });


export const { cleanLink } = paymentSlicer.actions
export default paymentSlicer.reducer;