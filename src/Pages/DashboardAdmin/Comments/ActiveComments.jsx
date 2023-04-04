import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getComments } from "../../../Redux/Slicers/AdminDashboard";
import CommentsContainer from "../../../Components/CommentsContainerAdminDashBoard/CommentsContainer";
import { updateCommentStatus } from "../../../Redux/Slicers/AdminDashboard";

export default function ActiveComments() {

    const dispatch = useDispatch();
    const comments = useSelector((state) => state.dashBoardAdmin.activeComments);

    const onclickHandler = async (id) => {
        const data = { action: "ban", id };
        const a = await dispatch(updateCommentStatus(data))
        if (a.meta?.requestStatus === "fulfilled") {
            console.log(a.meta.requestStatus)
            dispatch(getComments());
        }
    }

    useEffect(() => {
        dispatch(getComments());
    }, [dispatch])

    return (
        <CommentsContainer data={comments} click={onclickHandler} />
    )
}

