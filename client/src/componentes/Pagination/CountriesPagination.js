import React from "react";
import Country from "../Country/Country";
import "./countries-pagination.css";

const CountriesPagination = ({ countries, loading }) => {
  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className="countriesClass">
      {countries &&
        countries.map((e) => (
          <Country
            id={e.id}
            bandera={e.bandera}
            nombre={e.nombre}
            continente={e.continente}
          />
        ))}
    </div>
  );
};

export default CountriesPagination;
