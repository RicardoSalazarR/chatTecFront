import React from 'react';
import dfimg from '../../assets/cards/notFound.webp'
const Cards = () => {
    
    return (
        <div className='card-container'>
            <img src={dfimg} alt="" />
            <span className='card-title'>Titulo del producto</span>
            <span className='card-text'>estatus: <span className={true?"green":"red"}>{true?"Disponible":"No disponible"}</span></span>
            <span className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, error optio molestias ducimus maxime consequatur. lorem111</span>
            <button className='card-button'>Ver producto</button>
        </div>
    );
};

export default Cards;