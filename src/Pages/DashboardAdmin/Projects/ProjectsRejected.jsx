import { useDispatch, useSelector } from "react-redux";
import ContainerAdmin from "../../../Components/ContainerAdmin/ContainerAdmin";
import { useEffect } from "react";
import { getProject } from "../../../Redux/Slicers/AdminDashboard";

export default function ProjectsRejected() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);

  const proyectosrechazados = useSelector(
    (state) => state.dashBoardAdmin.ProjectsRejected
  );

  return (
    <>
      <ContainerAdmin data={proyectosrechazados} />
    </>
  );
}
