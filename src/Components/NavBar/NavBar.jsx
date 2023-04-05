import { Link, useLocation } from "react-router-dom";
import { Box, Flex, Grid, GridItem, Spacer, Button,Menu,MenuButton,Avatar,MenuList,Center,MenuDivider,MenuItem } from "@chakra-ui/react";

import ToggleColorMode from "../../modeColor/toggleColorMode";
import image from "../../Utils/image/2.jpg";
import style from "./NavBar.module.css";
import { useSelector } from "react-redux";
// import LogOutButton from "../logOutButton/LogOutButton";
import HamburgerMenu from "../HamburgerMenu/HamburguerMenu";
import { useDispatch } from "react-redux"
import { logOutLocal, logOutGoogle } from "../../Redux/Slicers/LogInOutSlicer";
export default function NavBar() {

  const location = useLocation();
  const dispatch = useDispatch();

  
  const onClickHandler = () => {
    const origin = localStorage.getItem("origin");
    if(origin === "local"){
      dispatch(logOutLocal());
    }else{
      dispatch(logOutGoogle())
    }
  }
  const LogInStatus = useSelector((state) => state.login.status);
  return (
    <div className={style.navBar}>
      <Grid templateColumns="repeat(3, 1fr)" gridTemplateRows="repeat(1fr)" >    
        <GridItem colSpan={9} p="20px">
          <GridItem mt="10px" mb="10px">
            <Flex alignItems="center">
              <a href="/home">
            <img src={image} width="70" height="70" />
              </a>
              <Spacer></Spacer>
               {!LogInStatus && ( 
                <>
                <ToggleColorMode/>              
                <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  marginLeft = "1rem"
                  >
                  <Avatar
                    size={'md'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                 </MenuButton>
                 <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem><a href="/profile">Profile</a></MenuItem>
                  <MenuItem onClick={onClickHandler}>Exit</MenuItem>
                </MenuList>
              </Menu>
              </>)
              } 

              {LogInStatus && (
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

              {LogInStatus && (
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
          </GridItem>
        <center>
          <GridItem width="40rem"> 
            <Box display={{ base: "none", md: "block" }}>
              <Flex justify="space-around">
                {location.pathname !== "/home" && (
                  <Link to={"/home"}>
                    <span className={style.underline}>HOME</span>{" "}
                  </Link>
                )}

                {location.pathname !== "/projects" && (
                  <Link to={"/projects"}>
                    {" "}
                    <span className={style.underline}>Projects</span>{" "}
                  </Link>
                )}
                {location.pathname !== "/create" && (
                  <Link to={"/create"}>
                    {" "}
                    <span className={style.underline}>Create Project</span>{" "}
                  </Link>
                )}
                {location.pathname !== "/home/aboutUs" && (
                  <Link to={"/home/aboutUs"}>
                    {" "}
                    <span className={style.underline}>About Us</span>{" "}
                  </Link>
                )}
              </Flex>
            </Box>
          </GridItem>
          </center>
            <HamburgerMenu />
        </GridItem>
      </Grid>
    </div>
  );
}