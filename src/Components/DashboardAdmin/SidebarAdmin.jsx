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
            <Link to="/profile/userComments/banned">
                <MenuItem>
                  Banned
                </MenuItem>
              </Link>
            <MenuDivider />
            <Link to="/profile/userComments/active">
              <MenuItem>
              {" "}
                Active
              </MenuItem>
            </Link>
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
          <Link to="/profile/projectsApproved">
            <MenuItem>
              Approved
            </MenuItem>
            </Link>
            <MenuDivider />
            <Link to="/profile/projectsPending">
              <MenuItem>
              {" "}
              Pending
            </MenuItem>
            </Link>
            <MenuDivider />
            <Link to="/profile/projectsCompleted">
            <MenuItem>
              {" "}
              Completed
            </MenuItem>
            </Link>
            <MenuDivider />
            <Link to="/profile/projectsRejected">
            <MenuItem>
              {" "}
              Rejected
            </MenuItem>
            </Link>
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
          <Link to="/profile/activeUsers">
            <MenuItem>
              Active
            </MenuItem>
            </Link>
            <MenuDivider />
            <Link to="/profile/bannedUsers">
            <MenuItem>
              {" "}
              Banned
            </MenuItem>
            </Link>
            <MenuDivider />
          </MenuList>
        </Menu>
      </VStack>
    </div >
  );
}
