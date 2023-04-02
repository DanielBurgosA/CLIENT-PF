import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  postUserStatus: "",
};

export const postUser = createAsyncThunk("user/postUser", async (info) => {
  const res = await axios.post("/users", info);
  return res.data;
});

const usersSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(postUser.fulfilled, (state) => {
      state.postUserStatus = "Succeeded";
    });
    //   .addCase(getUserById.fulfilled, (state, action) => {
    //     state.projectId = action.payload;
    //   })
  },
});

export default usersSlicer.reducer;
