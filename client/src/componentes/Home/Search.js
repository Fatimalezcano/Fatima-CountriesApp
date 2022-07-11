import React, { useState } from "react";
import { getCountry } from "../../Actions/Actions";
import { connect } from "react-redux";
import "./Search.css";

function Search(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.getCountry(name);
    setName("");
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="buscador"
          type="text"
          placeholder="Buscar país..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input className="boton" type="submit" value="Buscar" />
      </form>
    </>
  );
}

export default connect(null, { getCountry })(Search);
