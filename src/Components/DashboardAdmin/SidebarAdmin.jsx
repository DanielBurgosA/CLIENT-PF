import { Link } from "react-router-dom";

import {
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Menu,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../Redux/Slicers/AdminDashboard";

export default function SidebarAdmin() {


  return (
    <div>
      <VStack>
        {/*
          <Button
            colorScheme="teal"
            variant="outline"
            m="0.5rem"
            paddingRight="3.6rem"
          >
            <Link to="/profile/InfoAdmin">Admin Profile</Link>
          </Button>
       */}

        <Button colorScheme="teal" variant="outline" m="0.5rem">
          <Link to="/profile/donationsAdmin">Donations</Link>
        </Button>

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
            Comments <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/profile/userComments/banned">Banned</Link>

            </MenuItem>
            <MenuDivider />
            <MenuItem>
              {" "}
              <Link to="/profile/userComments/active">Active</Link>
            </MenuItem>
            <MenuDivider />
          </MenuList>
        </Menu>


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
            Projects <ChevronDownIcon />
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
            Users <ChevronDownIcon />
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
      </VStack>
    </div >
  );
}
