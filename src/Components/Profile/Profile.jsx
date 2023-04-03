import { Routes, Route } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import ProjectsUser from "../../Pages/DashboardUser/ProjectsUser/ProjectsUser";
import DonationUser from "../../Pages/DashboardUser/DonationsUser/DonationsUser";
import SidebarUser from "../DashboardUser/SidebarUser";
import UserInfo from "../../Pages/DashboardUser/UserInfo/UserInfo";
import AdminInfo from "../../Pages/DashboardAdmin/AdminInfo/AdminInfo";
import Donations from "../../Pages/DashboardAdmin/Donations/Donations";
import SidebarAdmin from "../DashboardAdmin/SidebarAdmin";
import ProjectsApproved from "../../Pages/DashboardAdmin/Projects/ProjectsApproved";
import ProjectsPending from "../../Pages/DashboardAdmin/Projects/ProjectsPending";
import ProjectsCompleted from "../../Pages/DashboardAdmin/Projects/ProjectsCompleted";
import ActiveUsersInfo from "../../Pages/DashboardAdmin/Users/ActiveUsersInfo";
import BannedUsersInfo from "../../Pages/DashboardAdmin/Users/BannedUsersInfo";
import ProjectsRejected from "../../Pages/DashboardAdmin/Projects/ProjectsRejected";
// import style from "./Profile.module.css";

export default function Profile() {
  const rol = localStorage.getItem("rol");
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
        {/* Primera manera de condicionar */}
        <GridItem pl="2" bg="blue.100" area={"nav"} mr="3px">
          {rol ? <SidebarAdmin /> : <SidebarUser />}
        </GridItem>
        <GridItem pl="2" bg="blue.50" area={"main"}>
          {rol ? (
            <Routes>
              <Route
                exact
                path="projectsApproved"
                element={<ProjectsApproved />}
              />
              <Route
                exact
                path="projectsPending"
                element={<ProjectsPending />}
              />
              <Route
                exact
                path="projectsCompleted"
                element={<ProjectsCompleted />}
              />
              <Route exact path="projectsRejected" element={<ProjectsRejected/>}/>
              <Route exact path="donationsAdmin" element={<Donations />} />
              <Route exact path="InfoAdmin" element={<AdminInfo />} />
              <Route exact path="bannedUsers" element={<BannedUsersInfo/>} />
              <Route exact path="activeUsers" element={<ActiveUsersInfo/>} />

            </Routes>
          ) : (
            <Routes>
              <Route exact path="projectsUser" element={<ProjectsUser />} />
              <Route exact path="donationHistory" element={<DonationUser />} />
              <Route exact path="userInfo" element={<UserInfo />} />
            </Routes>
          )}
        </GridItem>
      </Grid>
    </>
  );
}
