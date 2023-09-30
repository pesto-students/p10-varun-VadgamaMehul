import React from "react";
import { Link } from "react-router-dom";
import "./Navebar.css";

function Navebar() {
  return (
    <div>
      <header>
        <Link to="/">Mehul Vadgama</Link>
      </header>
      <ul>
        <li><Link to="/Skill">Skill</Link></li>
        <li><Link to="/Project">Project</Link></li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navebar;
