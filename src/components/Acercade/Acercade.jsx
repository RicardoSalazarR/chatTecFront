import React from "react";
import "./acercade.css";
import image from "../../assets/img.jpeg";

const Acercade = () => {
  return (
    <div className="about-container">
      <div>
        <img src={image} alt="" />
        <div>
          <span className="main-text">Alumno: </span>
          <span className="sec-text">Salazar Reyes Ricardo Axel</span>
        </div>
        <div>
          <span className="main-text">Carrera: </span>
          <span className="sec-text">
            Ingeniería en Sistemas Computacionales
          </span>
        </div>
        <div>
          <span className="main-text">Número de control: </span>
          <span className="sec-text">19200881</span>
        </div>
        <div>
          <span className="main-text">Email: </span>
          <span className="sec-text">l19200881@pachuca.tecnm.mx</span>
        </div>
      </div>
    </div>
  );
};

export default Acercade;
