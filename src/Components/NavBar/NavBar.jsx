import { Link, useLocation } from "react-router-dom";
import { Box, Flex, Grid, GridItem, Spacer, Button, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem } from "@chakra-ui/react";

import ToggleColorMode from "../../modeColor/toggleColorMode";
import image from "../../Utils/image/2.jpg";
import style from "./NavBar.module.css";
import { useSelector } from "react-redux";
// import LogOutButton from "../logOutButton/LogOutButton";
import HamburgerMenu from "../HamburgerMenu/HamburguerMenu";
import { useDispatch } from "react-redux"
import { logOutLocal, logOutGoogle } from "../../Redux/Slicers/LogInOutSlicer";
import { useNavigate } from 'react-router-dom';


export default function NavBar() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector(state => state.login.user)

  const onClickHandler = () => {
    const origin = localStorage.getItem("origin");
    if (origin === "local") {
      dispatch(logOutLocal());
    } else {
      dispatch(logOutGoogle())
    }
    navigate("/home");
  }
  const LogInStatus = useSelector((state) => state.login.status);
  return (
    // <div className={style.navBar}>

    <Flex alignItems="center" justify="space-between">
      <a href="/home">
        <img src={image} width="100px" height="100px" />
      </a>

      <Box display={{ base: "none", md: "block" }} w={{ md: "60vw" }} >
        <Flex justify="space-around" alignItems="center">
          {location.pathname !== "/home" && (
            <Link to={"/home"}>
              <Box as="span"
                p="7px"
                _hover={{
                  background: "blue.100",
                  borderRadius: "5px",
                }}

              >
                Home
              </Box>
            </Link>
          )}
          {location.pathname !== "/projects" && (
            <Link to={"/projects"}>
              <Box as="span"
                p="7px"
                _hover={{
                  background: "blue.100",
                  borderRadius: "5px",
                }}

              >Projects</Box>
            </Link>
          )}
          {location.pathname !== "/create" && (
            <Link to={LogInStatus ? "/create" : "/login"}>
              <Box as="span"
                p="7px"
                _hover={{
                  background: "blue.100",
                  borderRadius: "5px",
                }}
              >Create Project</Box>
            </Link>
          )}
          {location.pathname !== "/home/aboutUs" && (
            <Link to={"/home/aboutUs"}>

              <Box as="span"
                p="7px"
                _hover={{
                  background: "blue.100",
                  borderRadius: "5px",
                }}
              >About Us</Box>
            </Link>
          )}

        </Flex>

      </Box>
      <Spacer></Spacer>
      <Box >
        <Flex justify="space-around" alignItems="center">
          {LogInStatus && (
            <>
              <ToggleColorMode />
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  marginLeft="1rem"
                >
                  <Avatar
                    size={'md'}
                    src={user.image}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={user.image}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{`${user.name} ${user.lastname}`}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem><a href="/profile">Profile</a></MenuItem>
                  {location.pathname !== "/pagos" && <MenuItem onClick={onClickHandler}>Exit</MenuItem>}
                </MenuList>
              </Menu>
            </>)
          }

          {!LogInStatus && (
            <a href="/create-user">
              <Button
                colorScheme="teal"
                variant="outline"
                marginRight="1rem"
              >
                Sign Up
              </Button>
            </a>
          )}

          {!LogInStatus && (
            <>
              <a href="/login">
                <Button colorScheme="teal" variant="solid" marginRight="1rem">
                  Sign In
                </Button>
              </a>
              <ToggleColorMode />
            </>
          )}
        </Flex>
      </Box>


      <HamburgerMenu />
    </Flex>






    // </div>
  );
}