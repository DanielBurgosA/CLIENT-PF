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
  ProjectsDeleted: [],
};
export const getProject = createAsyncThunk(
  "adminDashboard/getProject",
  async () => {
    const res = await axios.get(`/userprojects`);
    return res.data;
  }
);

export const getUsers = createAsyncThunk(
  "adminDashboard/getUsers",
  async () => {
    const res = await axios.get(`/getUsers`);
    const data = res.json();
    return data;
  }
);

export const getDonations = createAsyncThunk(
  "adminDashboard/donations",
  async () => {
    const res = await axios.get(`/donations`);
    const data = res.json();
    return data;
  }
);

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
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.AllUsers = [...action.payload];

        if (state.AllUsers.length > 0) {
          const TodosUsuarios = state.AllUsers;
          const UsuariosBuenos = TodosUsuarios.filter(
            (elem) => elem.ban === false
          );
          state.GoodUsers = [...UsuariosBuenos];
        }
        if (state.AllUsers.length > 0) {
          const TodosUsuarios = state.AllUsers;
          const UsuariosMalos = TodosUsuarios.filter(
            (elem) => elem.ban === true
          );
          state.BadUsers = [...UsuariosMalos];
        }
        if (state.AllUsers.length > 0) {
          const TodosUsuarios = state.AllUsers;
          const UsuarioBorrado = TodosUsuarios.filter(
            (elem) => elem.deleted === true
          );
          state.DeleteUsers = [...UsuarioBorrado];
        }
      })
      .addCase(getDonations.fulfilled, (state, action) => {
        state.AllDonation = [...action.payload];
      });
  },
});

export default adminDashboardSlicer.reducer;
