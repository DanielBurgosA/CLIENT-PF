import { useSelector, useDispatch } from "react-redux";
import ContainerUsers from "../../../Components/ContainerUsers/ContainerUsers";
import { useEffect, useState } from "react";
import { getUsers } from "../../../Redux/Slicers/AdminDashboard";

export default function BannedUsersInfo() {
    const dispatch = useDispatch();
    
    let bannedUsers = useSelector((state) => state.dashBoardAdmin.BadUsers);

    const [render, setRender] = useState(0);

    console.log(render)

    const onRender = () => {
        setRender(render + 1)
    }

    useEffect(() => {
        
        dispatch(getUsers());
        
        return () => {
            bannedUsers = []
        }
       
    }, [dispatch, render]);
    return (
       <ContainerUsers data={ bannedUsers } render={ onRender }></ContainerUsers>
    )
}
