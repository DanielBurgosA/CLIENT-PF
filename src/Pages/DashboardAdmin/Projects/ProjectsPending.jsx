import { useDispatch, useSelector } from "react-redux";
import ContainerAdmin from "../../../Components/ContainerAdmin/ContainerAdmin";
import { useEffect } from "react";
import { getProject } from "../../../Redux/Slicers/AdminDashboard";

export default function ProjectsPending() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);
  const proyectosPendientes = useSelector(
    (state) => state.dashBoardAdmin.ProjectsPending
  );

  return (
    <>
      <ContainerAdmin data={proyectosPendientes} />
    </>
  );
}
