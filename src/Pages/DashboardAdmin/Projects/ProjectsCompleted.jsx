import { useDispatch, useSelector } from "react-redux";
import ContainerAdmin from "../../../Components/ContainerAdmin/ContainerAdmin";
import { useEffect } from "react";
import { getProject } from "../../../Redux/Slicers/AdminDashboard";

export default function ProjectsCompleted() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);

  const proyectosCompletados = useSelector(
    (state) => state.dashBoardAdmin.ProjectsCompleted
  );

  return (
    <>
      <ContainerAdmin data={proyectosCompletados} />
    </>
  );
}
