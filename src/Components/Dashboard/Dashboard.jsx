import { useState } from "react";
import style from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Dashboard(props) {
  const [showDashboard, setShowDashboard] = useState(false);

  const LogInStatus = useSelector(state => state.login.status);
   const navigate = useNavigate()

  const handleNavigate = (route) => {
    console.log("pasa por aca y log in es", LogInStatus);
    console.log("esta es la ruta", route);
    if (LogInStatus) {
      navigate(route);
    } else {
      navigate('/login');
      alert("You must be logged in to access these features")
    }
  };

  return (
    <div className={`dashboard-container ${style.container}`}>
      <button className={style.button} onClick={() => setShowDashboard(!showDashboard)}>Dashboard</button>
      { showDashboard && (
        <ul className={style.list}>
          <li>
            <button onClick={() => handleNavigate('/donationhistory')}>Donation history</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('/myprojects')}>My projects</button>
          </li>
        </ul>
      )}
    </div>
  );
}

