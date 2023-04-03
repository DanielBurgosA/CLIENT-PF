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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../Redux/Slicers/AdminDashboard";

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
                <Link to="/profile/projectsApproved">Approved</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                {" "}
                <Link to="/profile/projectsPending">Pending</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                {" "}
                <Link to="/profile/projectsCompleted">Completed</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                {" "}
                <Link to="/profile/projectsRejected">Rejected</Link>
              </MenuItem>
            </MenuList>
          </Menu>

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
                Users <CheckCircleIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/profile/activeUsers">Active</Link>

                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  {" "}
                  <Link to="/profile/bannedUsers">Banned</Link>
                </MenuItem>
                <MenuDivider />
              </MenuList>
            </Menu>
          </li>
        </li>
      </ul>
    </div>
  );
}
