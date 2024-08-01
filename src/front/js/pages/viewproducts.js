import React from 'react';
import { useNavigate, useParams, link } from 'react-router-dom';
import { dishes } from '../component/dishes'; // Asumiendo que tienes un archivo similar a 'restaurants.js' para los platos
import '../../styles/viewproducts.css';

const ViewProducts = () => {
    const navigate = useNavigate();
    const { restaurantId } = useParams();
    const filteredDishes = dishes().filter(dish => dish.restaurantId === parseInt(restaurantId));

    return (
        <div className="view-products-container">
            <h2>Platos de {filteredDishes[0]?.restaurantName}</h2>
            <div className="dish-grid">
                {filteredDishes.map(dish => (
                    <div key={dish.id} className="dish-card" onClick={() => navigate(`/productDetail/${dish.id}`)}>
                        <img src={require(`../../img/${dish.imgSrc}`).default} alt={dish.name} />
                        <div className="dish-details">
                            <h4>{dish.name}</h4>
                            <p>{dish.description}</p>
                            <p className="price">${dish.price}</p>
                            <button className="view-detail-button">Ver detalles</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewProducts;

