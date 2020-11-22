import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <h1>Hola Mundo</h1>
    <p>Estoy en: {process.env.CITY} !</p>
    </>,
  document.getElementById("root")
);