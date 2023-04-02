import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  AllDonation: [],
  AllProjects: [],
  DonationUser: [],
  ProjectsUser: {},
  UserInfo: {},
  user: {},
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
    const res = await axios.get(`/donations`);
    const data = res.json();
    return data;
  }
);
export const getUser = createAsyncThunk("userDashboard/getUser", async () => {
  axios.interceptors.request.use((req) => {
    const token = localStorage.getItem("value");
    req.headers.authorization = `Bearer ${token}`;
    return req;
  });
  const res = await axios.get(`/user`);

  return res.data;
});
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
        state.AllDonation = [...action.payload];
        const TodasDonaciones = state.AllDonation;
        //aca seria el filtrado las donaciones correspondiente al usuario que luego se guarda en el UserDonations
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default userDashboardSlicer.reducer;
