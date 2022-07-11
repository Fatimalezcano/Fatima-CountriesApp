import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";

export default function Country({ bandera, nombre, continente, id }) {
  return (
    <div className="countryClass">
      <div className="container-flag">
        <img src={bandera} className="flag" />
      </div>
      <div className="name">
        <p>{nombre}</p>
      </div>
      <div className="continent">
        <p>{continente}</p>
      </div>
      <div>
        <Link to={`/home/detail/${id}`}>
          <button className="detail">Detalle</button>
        </Link>
      </div>
    </div>
  );
}
