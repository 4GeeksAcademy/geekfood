// src/front/js/pages/resumebuy.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/resumebuy.css';

const ResumeBuy = ({ cart, updateCart, removeFromCart }) => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleQuantityChange = (id, delta) => {
        updateCart(id, delta);
    };

    const handleContinue = () => {
        navigate('/checkout', { state: { cart, totalPrice } });
    };

    return (
        <div className="resume-buy-container">
            <div className="cart-items">
                <h2>Carro de compras {/* ({cart.length} Productos) */}</h2>
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={require(`../../img/${item.imgSrc}`).default} alt={item.name} />
                        <div className="cart-item-details">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <p className="price">${item.price}</p>
                            <div className="quantity">
                                <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)} disabled={item.quantity >= 3}>+</button>
                            </div>
                        </div>
                        <button className="remove-button" onClick={() => handleRemove(item.id)}>Eliminar productos</button>
                    </div>
                ))}
            </div>

            <div className="summary">
                <h3>Resumen de la compra</h3>
                <p>Productos: ${totalPrice}</p>
                <p>Total cargos: $3500</p>
                <p>Total: ${totalPrice + 3500}</p>
                <button className="btn btn-outline-secondary btn-sm continue-buying" onClick={handleContinue}>Continuar compra</button>
                <Link className="btn btn-outline-secondary btn-sm continue-shopping" to="/product_americano">Seguir comprando</Link>
            </div>
        </div>
    );
};

export default ResumeBuy;
