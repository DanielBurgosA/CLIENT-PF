import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentsByProjectId: [],
};

export const postComment = createAsyncThunk(
  "comment/postComment",
  async (body) => {
    try {
      const comment = await axios.post("/comment", body);
      console.log("post comment", comment.data);
      return comment.data;
    } catch (error) {
      console.log('error :>> ', error.message);
    }
  }
);

const commentsSlicer = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(postComment.fulfilled, (state) => {
      state.createComment = "Succeeded";
    })
  }
});

export default commentsSlicer.reducer;