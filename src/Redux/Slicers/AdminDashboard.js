import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  AllDonation: [],
  AllUsers: [],
  DeleteUsers: [],
  GoodUsers: [],
  BadUsers: [],
  AllProjects: [],
  ProjectsPending: [],
  ProjectsCompleted: [],
  ProjectsApproved: [],
  ProjectsRejected: [],
  bannedComments: [],
  activeComments: [],

};
export const getProject = createAsyncThunk(
  "adminDashboard/getProject",
  async () => {
    const res = await axios.get(`/projects`);
    return res.data;
  }
);

export const getUsers = createAsyncThunk(
  "adminDashboard/getUsers",
  async () => {
    const res = await axios.get(`/users`);
    return res.data;
  }
);

export const getDonations = createAsyncThunk(
  "adminDashboard/donations",
  async () => {
    const res = await axios.get(`/donations`);
    return res.data;
  }
);

export const changeBanStatus = createAsyncThunk(
  "adminDashboard/PutBanStatus",
  async (data) => {
    const res = await axios.put(`/ban`, data);

    return res.data;
  }
);

export const changeProjectStatus = createAsyncThunk(
  "adminDashboard/PutProjectStatus",
  async (data) => {
    const res = await axios.put(`/projects`, data);
    return res.data;
  }
);

export const getComments = createAsyncThunk(
  "adminDashboard/GetComments",
  async () => {
    const res = await axios.get('/comments/project');
    return res.data;
  }
);


export const updateCommentStatus = createAsyncThunk(
  "adminDashboard/PutCommentDeleted",
  async (data) => {
    const res = await axios.put("/comments", data);
    return res.data; 
  }
)

const adminDashboardSlicer = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder

      .addCase(getProject.fulfilled, (state, action) => {
        
        state.AllProjects = [...action.payload];
        if (state.AllProjects.length > 0) {
          const TodosProyectos = state.AllProjects;
          const ProyectoAprobado = TodosProyectos.filter(
            (elem) => elem.status === "approved" && elem.completed === false
          );
          state.ProjectsApproved = [...ProyectoAprobado];
        }
        if (state.AllProjects.length > 0) {
          const ProyectosPendientes = state.AllProjects;
          const PendientesProjects = ProyectosPendientes.filter(
            (elem) => elem.status === "wait approval"
          );
          state.ProjectsPending = [...PendientesProjects];
        }
        if (state.AllProjects.length > 0) {
          const ProyectosCompletados = state.AllProjects;
          const CompletadosProyectos = ProyectosCompletados.filter(
            (elem) => elem.completed === true
          );
          state.ProjectsCompleted = [...CompletadosProyectos];
        }
        if (state.AllProjects.length > 0) {
          state.ProjectsRejected = state.AllProjects.filter(
            (elem) => elem.status === "rejected"
          );
        }
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.AllUsers = action.payload;

        if (state.AllUsers.length > 0) {
          const TodosUsuarios = state.AllUsers;
          const UsuariosBuenos = TodosUsuarios.filter(
            (elem) => elem.deleted === false&&elem.admin === false
          );
          state.GoodUsers = [...UsuariosBuenos];
        }
        if (state.AllUsers.length > 0) {
          const TodosUsuarios = state.AllUsers;
          const UsuariosMalos = TodosUsuarios.filter(
            (elem) => elem.deleted === true
          );
          state.BadUsers = [...UsuariosMalos];
        }


        // if (state.AllUsers.length > 0) {
        //   const TodosUsuarios = state.AllUsers;
        //   const UsuarioBorrado = TodosUsuarios.filter(
        //     (elem) => elem.deleted === true
        //   );
        //   state.DeleteUsers = [...UsuarioBorrado];
        // }
      })
      .addCase(getDonations.fulfilled, (state, action) => {
        state.AllDonation = action.payload;
        console.log(action.payload)
      })

      // .addCase(changeBanStatus.fulfilled, async (state, action) => {
      //   const resU = await getUsers();
      // })
      .addCase(getComments.fulfilled, (state, action) => {
        console.log("este es", action.payload)
        state.bannedComments = action.payload.filter(comment => comment.deleted === true);
        console.log(state.bannedComments);
        state.activeComments = action.payload.filter(comment => comment.deleted === false);
        console.log(state.activeComments);
      })

      .addCase(updateCommentStatus.fulfilled, (state, action) => {
        console.log(action.payload);
      })
  },
});

export default adminDashboardSlicer.reducer;
