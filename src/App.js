import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import LargeWithNewsletter from "./Components/Footer/Footer";

import {
  AboutUs,
  DetailProject,
  DetailUser,
  FormProjects,
  Home,
  LogIn,
  Pagos,
  Projects,
  Validation,
  UserForm,
  CancelPayment,
  ExecutePayment
} from "./Pages";
import NavBar from "./Components/NavBar/NavBar";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "./Redux/Slicers/projectSlicer";
import { getSeeLaterItem } from "./Redux/Slicers/projectSlicer";
import { userGoogleLogin } from "./Redux/Slicers/LogInOutSlicer";
import { getUser } from "./Redux/Slicers/LogInOutSlicer";
import ForgotPassword from "./Pages/forgotPassword/ForgotPAssword";
import ResetPassword from "./Pages/ResetPAssword/ResetPassword";
import Profile from "./Components/Profile/Profile";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const LogInStatus = useSelector((state) => state.login.status);

  useEffect(() => {
    if (!LogInStatus) {
      dispatch(userGoogleLogin());
    }
  }, [dispatch, LogInStatus]);

  useEffect(() => {
    dispatch(getProject());
    dispatch(getSeeLaterItem());
    if(LogInStatus){
      dispatch(getUser());
    }
    
  });

  return (
    <div className="App">
      {/* <div>
          {location.pathname !== '/pagos' || location.pathname !== '/login' && <NavBar/>}
      </div> */}
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/aboutUs" element={<AboutUs />} />
        <Route exact path="/projects/:id" element={<DetailProject />} />
        <Route exact path="/create" element={<FormProjects />} />
        <Route exact path="/user/:name" element={<DetailUser />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/create-user" element={<UserForm />} />
        <Route exact path="/pagos" element={<Pagos />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/cancel-payment" element={<CancelPayment />} />
        <Route exact path="/execute-payment" element={<ExecutePayment />} />
        <Route exact path="/validation" element={<Validation />} />
        <Route exact path="/execute-payment" element={<ExecutePayment />} />
        <Route exact path="/cancel-payment" element={<CancelPayment />} />
        <Route
          exact
          path="/forgotPassword"
          element={<ForgotPassword />}
        ></Route>
        <Route exact path="/reset" element={<ResetPassword />} />
        <Route exact path="/profile/*" element={<Profile />} />
      </Routes>
     <LargeWithNewsletter />
    </div>
  );
}

export default App;
