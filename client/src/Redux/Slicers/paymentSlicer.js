import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  payLink: "",
};

export const linkPaymentPlatform = createAsyncThunk(
  "project/linkPaymentPlatform",
  async () => {
    const res = await axios.post(`http://localhost:3001/create-payment`);
    console.log("esto es le post",res.data)
    return res.data;
  }
);

const paymentSlicer = createSlice({
    name: "paymentLink",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(linkPaymentPlatform.fulfilled, (state, action) => {
        console.log("esto es action", action.payload.data.links[1].href)
        state.payLink = action.payload.data.links[1].href;
      });
    },
  });


export const { payLink } = paymentSlicer.actions
export default paymentSlicer.reducer;