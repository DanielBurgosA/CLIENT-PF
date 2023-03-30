import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./Dashboard.module.css";

export default function Dashboard() {
    const [showDashboard, setShowDashboard] = useState(false);
  
    return (
      <div className={`dashboard-container ${style.container}`}>
        <button className={style.button} onClick={() => setShowDashboard(!showDashboard)}>Dashboard</button>
        {showDashboard && (
          <ul className={style.list}>
            <li>
              <Link to="/pagos">Pagos</Link>
            </li>
            <li>
              <Link to="/projects">Proyectos</Link>
            </li>
          </ul>
        )}
      </div>
    );
}
