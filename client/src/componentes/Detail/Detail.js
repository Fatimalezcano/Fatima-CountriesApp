import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../Actions/Actions";
import "./detail.css";

function Detail({ getDetail, country }) {
  const { idPais } = useParams();

  useEffect(() => {
    getDetail(idPais);
  }, []);

  return (
    <div className="detalle">
      {country && (
        <div className="detail-container">
          <div className="name-flag">
            <h2>{country.nombre}</h2>
            <img className="flag-detail" src={country.bandera} />
          </div>

          <div className="description">
            <div className="item-title">
              <p>Continente: </p>
              <p>&nbsp;&nbsp;{country.continente}</p>
            </div>
            <div className="item-title">
              <p>Capital: </p>
              <p>&nbsp;&nbsp;{country.capital}</p>
            </div>
            <div className="item-title">
              <p>Subregion: </p>
              <p>&nbsp;&nbsp;{country.subregion}</p>
            </div>
            <div className="item-title">
              <p>Area: </p>
              <p>&nbsp;&nbsp;{country.area}km2</p>
            </div>
            <div className="item-title">
              <p>Poblacion:</p>
              <p>&nbsp;&nbsp;{country.poblacion}</p>
            </div>
          </div>
        </div>
      )}
      <div className="actividad">
        <h2>Actividades: </h2>
        <div>
          {country &&
            country.activities &&
            country.activities.map((actividad) => (
              <div className="contenedor-actividad">
                <div className="nombre-actividad">
                  <p>Nombre </p>
                  <p>&nbsp;&nbsp;{actividad.nombre}</p>
                </div>
                <div className="nombre-actividad">
                  <p>Duracion </p>
                  <p>&nbsp;&nbsp;{actividad.duracion}</p>
                </div>
                <div className="nombre-actividad">
                  <p>Dificultad </p>
                  <p>&nbsp;&nbsp;{actividad.dificultad}</p>
                </div>
                <div className="nombre-actividad">
                  <p>Temporada </p>
                  <p>&nbsp;&nbsp;{actividad.temporada}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    country: state.country,
  };
}

export default connect(mapStateToProps, { getDetail })(Detail);
