import { useDispatch, useSelector } from "react-redux";
import ContainerAdmin from "../../../Components/ContainerAdmin/ContainerAdmin";
import { useEffect } from "react";
import { getProject } from "../../../Redux/Slicers/AdminDashboard";

export default function ProjectsApproved() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);

  const proyectosAprobados = useSelector(
    (state) => state.dashBoardAdmin.ProjectsApproved
  );

  return (
    <>
      <ContainerAdmin data={proyectosAprobados} />
    </>
  );
}
