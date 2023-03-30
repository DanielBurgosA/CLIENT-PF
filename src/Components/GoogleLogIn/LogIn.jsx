import { Button } from "@chakra-ui/react";
import React from "react";
import { ImGoogle } from "react-icons/im";
import { userLogInGoogle } from "../../Redux/Slicers/LogInSlicer";
import { useDispatch } from "react-redux";

export default function SignUp() {
  // const dispatch = useDispatch();
  // const handler =() =>{
  //   dispatch(userLogInGoogle());
  // }
  return (
    <div>
      <a className="enlace" href="#">
        <Button >
          <ImGoogle color="#07588a" />
          &nbsp;&nbsp;inicio de sesion con google
        </Button>
      </a>
    </div>
  );
}
