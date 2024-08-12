// src/front/js/pages/invoice.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/invoice.css';

const Invoice = () => {
    const location = useLocation();
    const { cart, totalPrice, restaurant, address, paymentMethod } = location.state || {};

/*     if (!restaurant) {
        return <p>No se encontró información del restaurante.</p>;
    } */

    return (
        <div className="invoice-container">
            <div className="confirmation-message">
                <h3>Tu compra ha sido procesada, tu pedido va en camino</h3>
            </div>

            <div className="delivery-info">
                <p>Número de orden: 0000000001</p>
                <p>Repartidor: Nombre del repartidor</p>
                <p>Transporte: Bicicleta</p>
                <p>Inicio: 9:27 p.m.</p>
                <p>Entrega: 10:15 p.m.</p>
                <p>Dirección: {address || "Desconocida"}</p>
            </div>

            <div className="payment-info">
                <h3>Método de pago</h3>
                <p>{paymentMethod || "Tarjeta de crédito"}</p>
            </div>

            <div className="cost-summary">
                <h3>Costos</h3>
                <p>Costo de los productos: ${totalPrice}</p>
                <p>Total cargos: $3500</p>
                <p>Total: ${totalPrice + 3500}</p>
            </div>
        </div>
    );
};

export default Invoice;
