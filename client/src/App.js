import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./componentes/LandingPage/LandingPage.js";
import Home from "./componentes/Home/Home";
import Detail from "./componentes/Detail/Detail";
import CreateActivity from "./componentes/CreateActivity/CreateActivity";
import Nav from "./componentes/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route path="/home" element={<Home />} />

        <Route exact path="/home/detail/:idPais" element={<Detail />} />

        <Route exact path="/home/createActivity" element={<CreateActivity />} />
      </Routes>
    </div>
  );
}

export default App;
