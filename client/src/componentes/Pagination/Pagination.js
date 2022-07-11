import React from "react";
import "./Pagination.css";

//creo el componente y recibe las props que se mandan desde home
const Pagination = ({
  countriesPerPage,
  totalCountries,
  handlePaginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumber = [];

  //guarda dentro de pagenumber la cantidad de paginas. Guarda en cada elemento del arreglo el numero
  //de pagina
  for (var i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalCountries / countriesPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className="container">
      <button
        className="atras-siguiente"
        onClick={() => handleBack()}
      >
        Atras
      </button>
      {pageNumber.map((number) => (
        // number es el numero de pagina que el usuario hizo click
        <button className="numeros" onClick={() => handlePaginate(number)}>
          {number}
        </button>
      ))}
      <button
        className="atras-siguiente"
        onClick={() => handleNext()}
      >
        Siguiente
      </button>
    </nav>
  );
};

export default Pagination;
