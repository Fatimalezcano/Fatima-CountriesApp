import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";




export default function LandingPage() {

  return (
    <div className="landing-container">
      <Link to={"/home"}>
        <div className="titulo">
          <h1>Countries App</h1>
        </div>
      </Link>
    </div>
  );
}

