import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  AllDonation: [],
  AllProjects: [],
  DonationUser: [],
  ProjectsUser: {},
  
};
export const getProject = createAsyncThunk(
  "userDashboard/getProject",
  async () => {
    const res = await axios.get(`/userprojects`);
    return res.data;
  }
);

// export const getUsers = createAsyncThunk("userDashboard/getUsers", async () => {
//   const res = await axios.get(`/getUsers`);
//   const data = res.json();
//   return data;
// });

export const getDonations = createAsyncThunk(
  "userDashboard/donations",
  async () => {
    const res = await axios.get(`/user/donations`);
    return res.data;
  }
);

const userDashboardSlicer = createSlice({
  name: "userDashboard",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getProject.fulfilled, (state, action) => {
        state.AllProjects = [...action.payload];
        const TodosProyectos = state.AllProjects;
        //aca seria el filtrado del proyecto correspondiente al usuario que luego se guarda en el ProjectsUser
      })
     
      .addCase(getDonations.fulfilled, (state, action) => {
        console.log(action.payload)
      })
  },
});

export default userDashboardSlicer.reducer;
