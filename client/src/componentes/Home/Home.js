import React, { useEffect, useState } from "react";
import Countries from "../Countries/Countries";
import Filters from "../Filters/Filters";
import CountriesPagination from "../Pagination/CountriesPagination";
import Pagination from "../Pagination/Pagination";
import { getCountries } from "../../Actions/Actions";
import { connect } from "react-redux";
import Country from "../Country/Country";
import "./Home.css";

function Home(props) {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  //en este array se guardan todos los paises que estan entre las posiciones indexOfLast e indexOfFirst
  const currentCountry =
    props.countries &&
    props.countries.slice(indexOfFirstCountry, indexOfLastCountry);

  useEffect(() => {
    if (!props.filtered) props.getCountries();
    console.log(props.countries);
  }, []);

  //cambio de pagina
  //pagenumber num de pagina actual, handlePaginate cambia el numero de pag seteando currentPage
  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <div className="saludo">
        <h1>¡Hola!</h1>
        <h3>
          En Countries App vas a encontrar toda la informacion que estes
          buscando sobre cualquier pais del mundo.
        </h3>
      </div>

      <div className="filter">
        <Filters />
      </div>

      {/* renderizo todas las cards de los paises */}
      {/* <div className="countriesClass">
        {currentCountry.length > 1 &&
          currentCountry.map((e) => (
            <Country
              id={e.id}
              bandera={e.bandera}
              nombre={e.nombre}
              continente={e.continente}
            />
          ))}
      </div> */}
      <CountriesPagination countries={currentCountry} loading={loading} />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={props.countries && props.countries.length}
        handlePaginate={handlePaginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    filtered: state.filtered,
  };
}

export default connect(mapStateToProps, { getCountries })(Home);
