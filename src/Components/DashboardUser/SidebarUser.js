import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";
import { Button } from "@chakra-ui/react";
export default function SidebarUser() {
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
