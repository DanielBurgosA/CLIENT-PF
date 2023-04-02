import { Link } from "react-router-dom";
import {
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Menu,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
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
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
            >
              Projects <CheckCircleIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/profile/projectsApproved">Approved Projects</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                {" "}
                <Link to="/profile/projectsPending">Projects Pending</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                {" "}
                <Link to="/profile/projectsCompleted">Projects Completed</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
      </ul>
    </div>
  );
}
