import React, { useState } from 'react';
import "../../styles/product_americano.css";
import { restaurants } from '../component/restaurants';
import imgComidaAmericana from '../../img/comida_americana.png';
import imgComidaChina from '../../img/comida_china.png';
import imgComidaKoreana from '../../img/comida_koreana.png';
import imgComidaEspañola from '../../img/comida_española.png';
import imgComidaIndia from '../../img/comida_india.png';
import imgComidaItaliana from '../../img/comida_italiana.png';
import imgComidaJaponesa from '../../img/comida_japonesa.png';
import imgComidaMexicana from '../../img/comida_mexicana.png';
import { useNavigate } from 'react-router-dom';

const DiscoverProducts = () => {
    const [filter, setFilter] = useState({ country: '', category: '' });
    const navigate = useNavigate();

    const handleFilterChange = (type, value) => {
        setFilter(prevFilter => ({ ...prevFilter, [type]: value }));
    };

    const filteredRestaurants = restaurants().filter(restaurant => {
        return (
            (!filter.country || restaurant.country === filter.country) &&
            (!filter.category || restaurant.category === filter.category)
        );
    });

    return (
        <div className="discover-products-container">
            <h2>Descubre nuestra amplia variedad de restaurantes</h2>
            <button className="clear-filter" onClick={() => setFilter({ country: '', category: '' })}>Borrar Filtro</button>
            <div className="filters">
                <div className="filter-section">
                    <div className="filter-options">
                        <div className="feature">
                            <img src={imgComidaAmericana} alt="Americana" onClick={() => handleFilterChange('country', 'USA')} />
                            <h4>Americana</h4>
                        </div>
                        <div className="feature">
                            <img src={imgComidaChina} alt="China" onClick={() => handleFilterChange('country', 'China')} />
                            <h4>China</h4>
                        </div>
                        <div className="feature">
                            <img src={imgComidaKoreana} alt="Coreana" onClick={() => handleFilterChange('country', 'Korea')} />
                            <h4>Koreana</h4>
                        </div>
                        <div className="feature">
                            <img src={imgComidaEspañola} alt="Española" onClick={() => handleFilterChange('country', 'Spain')} />
                            <h4>Española</h4>
                        </div>
                        <div className="feature">
                            <img src={imgComidaIndia} alt="India" onClick={() => handleFilterChange('country', 'India')} />
                            <h4>India</h4>
                        </div>
                        <div className="feature">
                            <img src={imgComidaItaliana} alt="Italiana" onClick={() => handleFilterChange('country', 'Italia')} />
                            <h4>Italiana</h4>
                        </div>
                        <div className="feature">
                            <img src={imgComidaJaponesa} alt="Japonesa" onClick={() => handleFilterChange('country', 'Japan')} />
                            <h4>Japonesa</h4>
                        </div>
                        <div className="feature">
                            <img src={imgComidaMexicana} alt="Mexicana" onClick={() => handleFilterChange('country', 'Mexico')} />
                            <h4>Mexicana</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="restaurant-grid">
                {filteredRestaurants.map(restaurant => (
                    <div key={restaurant.id} className="restaurant-card">
                        <img src={require(`../../img/${restaurant.imgSrc}`).default} alt={restaurant.name} />
                        <div className="restaurant-details">
                            <h4>{restaurant.name}</h4>
                            <p>{restaurant.category}</p>
                            <p>{restaurant.rating} ★</p>
                            <p>{restaurant.deliveryTime} min</p>
                            <p>${restaurant.price}</p>
                        </div>
                        <button className="view-product-button" onClick={() => navigate(`/viewproducts/${restaurant.id}`)}>ver productos</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverProducts;
