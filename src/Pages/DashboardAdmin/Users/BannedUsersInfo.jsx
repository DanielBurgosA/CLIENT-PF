import { useSelector, useDispatch } from "react-redux";
import ContainerUsers from "../../../Components/ContainerUsers/ContainerUsers";
import { useEffect, useState } from "react";
import { getUsers } from "../../../Redux/Slicers/AdminDashboard";

export default function BannedUsersInfo() {
    const dispatch = useDispatch();
    
    let bannedUsers = useSelector((state) => state.dashBoardAdmin.BadUsers);

    


    useEffect(() => {
        
        dispatch(getUsers());
    
    }, [dispatch]);
    return (
       <ContainerUsers data={ bannedUsers } ></ContainerUsers>
    )
}
