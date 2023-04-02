import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
export default function SidebarAdmin() {
  return (
    <div>
      <ul>
        <li>
          <Button
            colorScheme="teal"
            variant="outline"
            m="0.5rem"
            paddingRight="3.6rem"
          >
            <Link to="/profile/InfoAdmin">Admin Profile</Link>
          </Button>
        </li>
        <li>
          <Button colorScheme="teal" variant="outline" m="0.5rem">
            <Link to="/profile/donationsAdmin">Donations</Link>
          </Button>
        </li>
        <li>
          <Button
            colorScheme="teal"
            variant="outline"
            m="0.5rem"
            paddingRight="3rem"
          >
            <Link to="/profile/projectsAdmin">Projects</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
