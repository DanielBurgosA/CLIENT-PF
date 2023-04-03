import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/Slicers/UserDashboard";
export default function SidebarUser() {
  const usuario = useSelector((state) => state.dashBoardUser.user);
  console.log("usuario", usuario);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className={style.sidebar}>
      <ul>
        <li>
          <Button
            colorScheme="teal"
            variant="outline"
            m="0.5rem"
            paddingRight="3.6rem"
          >
            <Link to="/profile/userInfo">User Profile</Link>
          </Button>
        </li>
        <li>
          <Button colorScheme="teal" variant="outline" m="0.5rem">
            <Link to="/profile/donationHistory">Donation History</Link>
          </Button>
        </li>
        <li>
          <Button
            colorScheme="teal"
            variant="outline"
            m="0.5rem"
            paddingRight="3rem"
          >
            <Link to="/profile/projectsUser">User Projects</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
