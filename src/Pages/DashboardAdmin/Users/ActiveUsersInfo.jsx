import { useSelector, useDispatch } from "react-redux";
import ContainerUsers from "../../../Components/ContainerUsers/ContainerUsers";
import { useEffect, useState } from "react";
import { getUsers } from "../../../Redux/Slicers/AdminDashboard";


export default function ActiveUsersInfo() {
    const dispatch = useDispatch();
    let activeUsers = useSelector((state) => state.dashBoardAdmin.GoodUsers);


    const [render, setRender] = useState(0);

    const onRender = () => {
        setRender(render + 1);
    }

    useEffect(() => {
        dispatch(getUsers());
        return () =>{
            activeUsers = []
        }
    }, [dispatch, render]);

    return (

        <ContainerUsers data={activeUsers} render={onRender}></ContainerUsers>

    )
}
