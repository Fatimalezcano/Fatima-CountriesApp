import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getContinent,
  getActivities,
  getOrderingAlf,
  getOrderNum,
  getCountries,
} from "../../Actions/Actions";
import axios from "axios";
import "./filters.css";

function Filters(props) {
  //funcion de filtrado por poblacion
  function handleOrderingNum(e) {
    if (e.target.value === "All") {
      props.getCountries();
    } else {
      props.getOrderNum(e.target.value, props.countries);
    }
  }

  //funcion de filtrado por orden alfabetico
  function handleOrderingAlf(e) {
    if (e.target.value === "All") {
      props.getCountries();
    } else {
      props.getOrderingAlf(e.target.value, props.countries);
    }
  }

  //function para hacer el filtro por continente, el value es la opcion seleccionada por el usuario
  //le paso la action por props
  function handleChange(e) {
    if (e.target.value === "All") {
      props.getCountries();
    } else {
      props.getContinent(e.target.value);
    }
  }

  //area
  //   function handleOrderingArea(e) {
  //     if (e.target.value === "All") {
  //       props.getCountries();
  //     } else {
  //       props.getOrderArea(e.target.value, props.countries);
  //     }
  // }

  //function para hacer filtro por actividades. Le paso la action por props
  function handleActivity(e) {
    if (e.target.value === "All") {
      props.getCountries();
    } else {
      props.getActivities(e.target.value);
    }
  }

  //creo un estado local para filtrar actividades
  const [actividades, setActividades] = useState("");
  useEffect(() => {
    axios
      .get("https://gnghmntjhym.herokuapp.com/countries/activities")
      .then((response) => {
        setActividades(response.data);
      });
  }, []);

  return (
    <div>
      {/* Filtro por continentes */}
      <select
        className="select-class"
        name="Continents"
        onChange={(e) => handleChange(e)}
      >
        <option value="All">Filtro por continente</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      {/* Filtro por actividades, mapeo el estado local y por cada uno creo un option */}
      <select
        className="select-class"
        name="Activities"
        onChange={(e) => handleActivity(e)}
      >
        <option value="All">Filtro por actividades</option>
        {actividades &&
          actividades.map((actividad) => (
            <option value={actividad.nombre}>{actividad.nombre}</option>
          ))}
      </select>

      {/* Filtro por orden alfabetico */}
      <select
        className="select-class"
        name="Alfabeticamente"
        onChange={(e) => handleOrderingAlf(e)}
      >
        <option value="All">Ordenar alfabeticamente</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      {/* Filtro por poblacion ASC y DES */}
      <select
        className="select-class"
        name="Poblacion"
        onChange={(e) => handleOrderingNum(e)}
      >
        <option value="All">Ordenar por habitantes</option>
        <option value="ASC">Ascendente</option>
        <option value="DES">Descendente</option>
      </select>

      {/* area */}
      {/* <select
        className="select-class"
        name="Area"
        onChange={(e) => handleOrderingArea(e)}
      >
        <option value="All">Ordenar por Area</option>
        <option value="ASC">Ascendente</option>
        <option value="DES">Descendente</option>
      </select> */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps, {
  getContinent,
  getActivities,
  getOrderingAlf,
  getOrderNum,
  getCountries,
})(Filters);
