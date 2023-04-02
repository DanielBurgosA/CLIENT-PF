import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../Slicers/projectSlicer";
import usersReducer from "../Slicers/userSlicer";
import logInReducer from "../Slicers/LogInOutSlicer";
import paymentSlicer from "../Slicers/paymentSlicer";
import adminDashboardSlicer from "../Slicers/AdminDashboard";
import userDashboardSlicer from "../Slicers/UserDashboard";

export const Store = configureStore({
  reducer: {
    project: projectReducer,
    user: usersReducer,
    login: logInReducer,
    paymentLink: paymentSlicer,
    dashBoardAdmin: adminDashboardSlicer,
    dashBoardUser: userDashboardSlicer,
  },
});
