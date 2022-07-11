import React, { useEffect, useState } from "react";
import "./CreateActivity.css";
import { connect } from "react-redux";
import { getCountries } from "../../Actions/Actions";
import axios from "axios";

function CreateActivity(props) {
  const [inputs, setInputs] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: [],
    countryName: [],
  });

  //Elegir paises
  function handleSelectCountry(e) {
    const filterName = props.countries.filter((c) => c.id === e.target.value);
    setInputs({
      ...inputs,
      countries: [...inputs.countries, e.target.value],
      countryName: [...inputs.countryName, filterName[0].nombre],
    });
  }

  // Modifico los estados
  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (
      inputs.nombre &&
      inputs.dificultad &&
      inputs.duracion &&
      inputs.temporada &&
      inputs.countries.length > 0
    ) {
      await axios.post("https://gnghmntjhym.herokuapp.com/activity", inputs);
      window.alert("Actividad creada con exito!");
      window.location.reload();
    } else {
      window.alert("Alguno de los campos esta vacio");
    }
  }

  function handleDelete(e) {
    const deleteCountry = inputs.countryName.filter((c) => c !== e.target.name);
    setInputs({
      ...inputs,
      countryName: deleteCountry,
    });
  }

  useEffect(() => {
    props.getCountries();
  }, []);

  return (
    <div className="create-container">
      <div className="texto">
        <h2>Crear actividad</h2>
        <p>
          ¡Hola! En esta seccion vas a poder crear actividades turisticas y
          asignarlas a distintos paises. <br />
          La proxima vez que entres en nuestro sitio web vas a poder verlas en
          el home y filtrar por los paises donde se llevan a cabo.
        </p>
      </div>

      <div className="container-all">
        <form className="form-container" onSubmit={(e) => onSubmit(e)}>
          {/* input nombre */}
          <div className="input-item">
            <label className="nombres">Nombre:</label>
            <input
              className="input-marco"
              placeholder="Nombre de actividad"
              name="nombre"
              value={inputs.name}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="input-item">
            {/* input duracion */}
            <label className="nombres">Duracion:</label>
            <input
              className="input-marco"
              name="duracion"
              value={inputs.duracion}
              placeholder="Indicar duracion"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="input-item">
            {/* input dificultad */}
            <label className="nombres">Dificultad:</label>
            <select
              className="input-select"
              name="dificultad"
              onChange={(e) => handleChange(e)}
              required
            >
              <option value="">Seleccione dificultad</option>
              <option value="1">1 (muy facil)</option>
              <option value="2">2 (facil)</option>
              <option value="3">3 (intermedio)</option>
              <option value="4">4 (dificil)</option>
              <option value="5">5 (muy dificil)</option>
            </select>
          </div>

          <div className="input-item">
            {/* input temporada */}
            <label className="nombres">Temporada:</label>
            <select
              className="input-select"
              name="temporada"
              onChange={(e) => handleChange(e)}
              required
            >
              <option value="">Indicar temporada</option>
              <option value="verano">Verano</option>
              <option value="otoño">Otoño</option>
              <option value="invierno">Invierno</option>
              <option value="primavera">Primavera</option>
            </select>
          </div>

          <div className="input-item">
            {/* input elegir paises */}
            <label className="nombres">Elegir pais/paises:</label>
            <select
              className="paises"
              name="countries"
              onChange={(e) => handleSelectCountry(e)}
              required
            >
              {/* <option value="">Seleccionar paises</option> */}
              {props.countries &&
                props.countries.map((c) => (
                  <option value={c.id}>{c.nombre}</option>
                ))}
            </select>
          </div>

          <div>
            {/* BOTON CREAR */}
            <input className="boton-crear" type="submit" value="Crear!" />
          </div>
        </form>

        <div className="opciones-paises">
          {/* muestra los paises seleccionados */}
          {inputs.countryName.length > 0 &&
            inputs.countryName.map((c) => (
              <div className="pais-seleccionado">
                <button
                  className="boton-pais"
                  name={c}
                  onClick={(e) => handleDelete(e)}
                >
                  X
                </button>
                <p>{c}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
  };
}

export default connect(mapStateToProps, { getCountries })(CreateActivity);
