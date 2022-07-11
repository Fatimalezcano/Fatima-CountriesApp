import React from "react";
import { Link } from "react-router-dom";
import CreateActivity from "../CreateActivity/CreateActivity";
import Search from "../Home/Search";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="tituloNav">
        Countries App
      </Link>

      <div className="div-container">
        <Link to="/home" className="nav-home">
          Home
        </Link>

        <Link
          className="nav-home"
          to="/home/createActivity"
        >
          Crear Actividad
        </Link>

        <div className="search">
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
