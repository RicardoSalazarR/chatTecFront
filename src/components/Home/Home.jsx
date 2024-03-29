import React, { useEffect, useState } from "react";
import "./home.css";
import Cards from "./Cards";
import NavBarComponent from "../NavBar/NavBarComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const [items, setItems] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);
  const [firstCard, setFirstCard] = useState(0);
  const [lastCard, setLastCard] = useState(5);
  const [pages, setPages] = useState([1]);
  const [paginatedItems, setPaginatedItems] = useState([]);

  useEffect(() => {
    const pagesNumber = Math.ceil(items.length / cardsPerPage);
    if (pagesNumber > 1) {
      const newArr = [];
      for (let index = 0; index < pagesNumber; index++) {
        newArr.push(index + 1);
      }
      setPages(newArr);
    }
    setPaginatedItems(items.slice(firstCard, firstCard + cardsPerPage));
  }, [firstCard,items]);

  useEffect(() => {
    (async()=>{
      const res = await axios.get("http://localhost:8000/api/v1/items")
      setItems(res.data)
    })()
  },[])

  return (
    <div className="home-container">
      <ul className="sidemenu">
        {/* <li>
          <label htmlFor="search">Buscar item</label>
          <input type="text" id="search" />
        </li> */}
        <li>Items disponibles</li>
        <li>Mostrar todos</li>
        <li>Mis Items</li>
      </ul>
      <div className="body">
        <div className="cards-main-container">
          {paginatedItems.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
        <div className="pagination">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => {
                setFirstCard(page * cardsPerPage - cardsPerPage);
                setSelectedPage(page);
              }}
              className={
                selectedPage === page ? "selected-page" : "pagination-button"
              }
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
