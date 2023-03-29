import { Button } from "@chakra-ui/react";
import React from "react";
import { ImGoogle } from "react-icons/im";
import { useDispatch } from  "react-redux";
import { userLogInGoogle } from "../../Redux/Slicers/LogInSlicer";

export default function SignUp() {

  const dispatch = useDispatch();
  const handler =() =>{
    dispatch(userLogInGoogle());
  }

  return (
    <div>
      {/* <a className="enlace" href="https://pf-api-production.up.railway.app/auth/google"> */}
        <Button onClick={handler}>
          <ImGoogle color="#07588a" />
          &nbsp;&nbsp;inicio de sesion con google
        </Button>
      {/* </a> */}
    </div>
  );
}
