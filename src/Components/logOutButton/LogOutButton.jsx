import { useDispatch } from "react-redux"
import { Button } from "@chakra-ui/react";
import { logOutLocal, logOutGoogle } from "../../Redux/Slicers/LogInOutSlicer";

export default function LogOutButton (){
    const dispatch = useDispatch();

    const onClickHandler = () => {
        const origin = localStorage.getItem("origin");
        if(origin === "local"){
            dispatch(logOutLocal());
        }else{
            dispatch(logOutGoogle())
        }
        
    }

    return (
        <Button onClick={onClickHandler}>Log out</Button>
    )
}