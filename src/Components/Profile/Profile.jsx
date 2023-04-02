import { Routes, Route } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import ProjectsUser from "../../Pages/DashboardUser/ProjectsUser/ProjectsUser";
import DonationUser from "../../Pages/DashboardUser/DonationsUser/DonationsUser";
import SidebarUser from "../DashboardUser/SidebarUser";
import UserInfo from "../../Pages/DashboardUser/UserInfo/UserInfo";
import AdminInfo from "../../Pages/DashboardAdmin/AdminInfo/AdminInfo";
import Donations from "../../Pages/DashboardAdmin/Donations/Donations";
import Projects from "../../Pages/DashboardAdmin/Projects/Projects";
import SidebarAdmin from "../DashboardAdmin/SidebarAdmin";
// import style from "./Profile.module.css";

export default function Profile() {
  const rol = localStorage.getItem("rol")
  return (
    <>
      <Grid
        templateAreas={`"header header" "nav main"`}
        gridTemplateRows={"0px 1fr 30px"}
        gridTemplateColumns={"250px 1fr"}
        h="33rem"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        {/*  Dashboard User */}

        {/* <GridItem pl="2" bg="blue.100" area={"nav"} mr="3px">
          <SidebarUser />
        </GridItem>
        <GridItem pl="2" bg="blue.50" area={"main"}>
          <Routes>
            <Route exact path="projectsUser" element={<ProjectsUser />} />
            <Route exact path="donationHistory" element={<DonationUser />} />
            <Route exact path="userInfo" element={<UserInfo />} />
          </Routes>
        </GridItem> */}
        {/*  Dashboard Admin */}
        <GridItem pl="2" bg="blue.100" area={"nav"} mr="3px">
          <SidebarAdmin />
        </GridItem>
        <GridItem pl="2" bg="blue.50" area={"main"}>
          <Routes>
            <Route exact path="projectsAdmin" element={<Projects />} />
            <Route exact path="donationsAdmin" element={<Donations />} />
            <Route exact path="InfoAdmin" element={<AdminInfo />} />
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}
