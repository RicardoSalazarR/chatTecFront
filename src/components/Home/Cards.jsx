import React from "react";
import dfimg from "../../assets/cards/notFound.webp";
import { useNavigate } from "react-router-dom";
const Cards = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <img src={item.images[0] ? item.images[0].url : dfimg} alt="" />
      <span className="card-title">{item.item_titulo}</span>
      <span className="card-text">
        estatus:{" "}
        <span className={item.item_disponible ? "green" : "red"}>
          {item.item_disponible ? "Disponible" : "Prestado"}
        </span>
      </span>
      <span className="card-text">{item.item_descripcion}</span>
      <button
        className="card-button"
        onClick={() => {
          navigate(`/item/${item.item_id}`);
        }}
      >
        Ver producto
      </button>
    </div>
  );
};

export default Cards;
