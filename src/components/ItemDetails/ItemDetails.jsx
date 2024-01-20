import React, { useEffect, useState } from "react";
import "./itemdetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import dfimg from "../../assets/cards/notFound.webp";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [career, setCareer] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/items/${id}`);
        setItem(res.data);
        const res2 = await axios.get(
          `http://localhost:8000/api/v1/careers/${res.data.alumno.carrera}`
        );
        setCareer(res2.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="item-details-container">
      <div className="grid-1">
        <button>{"<"}</button>
        <img src={dfimg} alt="" />
        <button>{">"}</button>
      </div>
      <div className="grid-2">
        <div>
          <span className="item-title">{item.titulo}</span>
          <span className="item-description">{item.descripcion}</span>
          <span>
            <span className="item-category">Categoria:</span> {item.categoria}
          </span>
          <span className={item.disponible ? "green" : "red"}>
            {item.disponible ? "Disponible" : "Prestado"}
          </span>
        </div>
      </div>
      <div className="grid-3">
        <div>
          <div className="student-data">
            <span className="botom-title">Datos del Alumno</span>
            <span>
              <b>Nombre:</b> {item.alumno?.nombre}
            </span>
            <span>
              <b>Apellido:</b> {item.alumno?.apellido}
            </span>
            <span>
              <b>Número de control:</b> {item.alumno?.no_control}
            </span>
            <span>
              <b>Carrera:</b> {career.carr_nombre}
            </span>
          </div>
          <div className="contact-data">
            <span className="botom-title">Datos de Contacto</span>
            <span>
              <b>Email:</b> {item.alumno?.email}
            </span>
            <span>
              <b>Teléfono:</b> {item.alumno?.telefono}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
