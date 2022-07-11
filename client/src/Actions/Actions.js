import axios from "axios";

//action para llamar a todos los paises
export function getCountries() {
  return function (dispatch) {
    return axios
      .get("https://gnghmntjhym.herokuapp.com/countries")
      .then((response) => {
        dispatch({ type: "GET_COUNTRIES", payload: response.data });
      });
  };
}

//obtengo un pais por nombre. en Search
export function getCountry(name) {
  return function (dispatch) {
    return axios
      .get(`https://gnghmntjhym.herokuapp.com/countries?name=${name}`)
      .then((response) => {
        dispatch({ type: "GET_COUNTRY", payload: response.data });
      });
  };
}

//filtro paises por continente
export function getContinent(continente) {
  return function (dispatch) {
    return axios
      .get(
        `https://gnghmntjhym.herokuapp.com/countries?continente=${continente}`
      )
      .then((response) => {
        dispatch({ type: "GET_CONTINENT", payload: response.data });
      });
  };
}

//filtro por actividades
export function getActivities(activity) {
  return function (dispatch) {
    return axios
      .get(`https://gnghmntjhym.herokuapp.com/countries?activity=${activity}`)
      .then((response) => {
        dispatch({ type: "GET_ACTIVITY", payload: response.data });
      });
  };
}

//filtro por orden alfabetico ASC DESC
export function getOrderingAlf(modo, countries) {
  const arrayPaises = [...countries];
  arrayPaises.sort((a, b) => {
    var ordenA = a.nombre.toUpperCase();
    var ordenB = b.nombre.toUpperCase();

    if (modo === "A-Z") {
      if (ordenA === ordenB) {
        return 0;
      } else if (ordenA < ordenB) {
        return -1;
      }
      return 1;
    }

    if (modo === "Z-A") {
      if (ordenA === ordenB) {
        return 0;
      } else if (ordenA < ordenB) {
        return 1;
      }
      return -1;
    }
  });
  return function (dispatch) {
    dispatch({ type: "GET_ORDERING_ALF", payload: arrayPaises });
  };
}

//filtro por cantidad de poblacion ASC DESC
export function getOrderNum(modo, countries) {
  const arrayPaises = [...countries];
  arrayPaises.sort((a, b) => {
    var ordenA = a.poblacion;
    var ordenB = b.poblacion;

    if (modo === "ASC") {
      if (ordenA === ordenB) {
        return 0;
      } else if (ordenA < ordenB) {
        return -1;
      }
      return 1;
    }
    if (modo === "DES") {
      if (ordenA === ordenB) {
        return 0;
      } else if (ordenA < ordenB) {
        return 1;
      }
      return -1;
    }
  });

  return function (dispatch) {
    dispatch({ type: "GET_ORDERING_NUM", payload: arrayPaises });
  };
}

// area
//  export function getOrderArea(modo, countries) {
//   const arrayPaises = [...countries];
//   arrayPaises.sort((a, b) => {
//     var ordenA = a.area;
//     var ordenB = b.area;

//     if (modo === "ASC") {
//       if (ordenA === ordenB) {
//         return 0;
//       } else if (ordenA < ordenB) {
//         return -1;
//       }
//       return 1;
//     }
//     if (modo === "DES") {
//       if (ordenA === ordenB) {
//         return 0;
//       } else if (ordenA < ordenB) {
//         return 1;
//       }
//       return -1;
//     }
//   });
//   return function (dispatch) {
//     dispatch({ type: "GET_ORDERING_AREA", payload: arrayPaises });
// };
// }

//ruta detalle
export function getDetail(idPais) {
  return function (dispatch) {
    return axios
      .get(`https://gnghmntjhym.herokuapp.com/countries/${idPais}`)
      .then((response) => {
        dispatch({ type: "GET_DETAIL", payload: response.data });
      });
  };
}
