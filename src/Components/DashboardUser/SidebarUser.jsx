import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";
import {
  Button,
  VStack
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function SidebarUser() {
  
  return (
    <div className={style.sidebar}>

      <VStack>
        <Link to="/profile/userInfo">
        <Button
          colorScheme="teal"
          variant="outline"
          m="0.5rem"
        >
          General
        </Button>
        </Link>

        <Link to="/profile/donationHistory" >
        <Button colorScheme="teal" variant="outline" m="0.5rem">
          Donation History
        </Button>
        </Link>

        <Link to="/profile/projectsUser">
        <Button
          colorScheme="teal"
          variant="outline"
          m="0.5rem"
          paddingRight="3rem"
        >
          User Projects
        </Button>
        </Link>

        <Link to="/profile/edit">
        <Button
          colorScheme="teal"
          variant="outline"
          m="0.5rem"
          paddingRight="3rem"
        >
          Edit profile
        </Button>
        </Link>

      </VStack>
    </div>
  );
}
