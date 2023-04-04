import { useDispatch } from "react-redux"
import { Button } from "@chakra-ui/react";
import { logOutLocal, logOutGoogle } from "../../Redux/Slicers/LogInOutSlicer";
import { useNavigate } from 'react-router-dom';

export default function LogOutButton (){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickHandler = () => {
        const origin = localStorage.getItem("origin");
        if(origin === "local"){
            dispatch(logOutLocal());
        }else{
            dispatch(logOutGoogle())
        }
        navigate('/home');        
    }

    return (
        <Button onClick={onClickHandler}>Log out</Button>
    )
}