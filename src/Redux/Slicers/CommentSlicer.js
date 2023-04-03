import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentByProjectId: [],
  commentByUserId: [],
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

export const getCommentByProjectId = createAsyncThunk(
  "comment/getCommentByProjectId",
  async (id) => {
    axios.interceptors.request.use((req) => {
      const token = localStorage.getItem("value");
      req.headers.authorization = `Bearer ${token}`;
      return req;
    });
    console.log('id :>> ', id);
    const { data: comentario } = await axios.get(`/comments/project/${id}`);
    return comentario;
  }
);

export const getCommentByUserId = createAsyncThunk(
  "comment/getCommentByUserId",
  async (id) => {
    console.log('idslicer :>> ', id);
    const { data: commentUser } = await axios.get(`/comments/user/${id}`);
    console.log('commentUser *-*-*-*-*--*-*:>> ', commentUser);
    return commentUser;
  }
);



const commentsSlicer = createSlice({
  name: "comment",
  initialState,
  reducers: {
    comentarioState(state, action) {
      state.commentByProjectId = action.payload;
    },
    commentUserState(state, action) {
      state.commentByUserId = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(postComment.fulfilled, (state) => {
      state.createComment = "Succeeded";
    })
    .addCase(getCommentByProjectId.fulfilled, (state, action) => {
      state.commentByProjectId = action.payload;
    })
    .addCase(getCommentByUserId.fulfilled, (state, action) => {
      state.commentByUserId = action.payload;
    })
  },
});

export const { comentarioState, commentUserState } = commentsSlicer.actions;
export default commentsSlicer.reducer;
