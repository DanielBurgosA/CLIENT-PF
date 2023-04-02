import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentsByProjectId: [],
};

export const postComment = createAsyncThunk(
  "comment/postComment",
  async (body) => {
    axios.interceptors.request.use((req) => {
      const token = localStorage.getItem("value");
      req.headers.authorization = `Bearer ${token}`;
      return req;
    });

    try {
      const comment = await axios.post("/comment", body);
      return comment.data;
    } catch (error) {
      throw error;
    }
  }
);

const commentsSlicer = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(postComment.fulfilled, (state) => {
      state.createComment = "Succeeded";
    });
  },
});

export default commentsSlicer.reducer;
