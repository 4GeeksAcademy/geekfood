// src/front/js/pages/checkout.js

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/checkout.css';
import Address from '../component/address';
import PaymentInstrument from '../component/paymentinstrument';

const Checkout = () => {
    const location = useLocation();
    const { cart, totalPrice, restaurantName, restaurantImgSrc } = location.state; 
    const navigate = useNavigate();
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const handleAddressSubmit = (newAddress) => {
        setAddress(newAddress);
        setShowAddressModal(false);
    };

    const handlePaymentSubmit = (newPaymentMethod) => {
        setPaymentMethod(newPaymentMethod);
        setShowPaymentModal(false);
    };

    const handleOrder = () => {
        navigate('/invoice', {
            state: {
                cart: cart, 
                totalPrice: totalPrice, 
                restaurant: { name: restaurantName, imgSrc: restaurantImgSrc },
                address: address, 
                paymentMethod: paymentMethod 
            }
        });
    };

    return (
        <div className="checkout-container">
            <h2>Detalle de entrega</h2>
            <button className="btn btn-outline-secondary" onClick={() => setShowAddressModal(true)}>Agregar dirección</button>
            <p>Dirección: {address || "Ingresar dirección"}</p>
            <button className="btn btn-outline-secondary" onClick={() => setAddress("")}>Eliminar</button>

            {showAddressModal && <Address onSubmit={handleAddressSubmit} />}

            <h2>Medios de pago</h2>
            <button className="btn btn-outline-secondary" onClick={() => setShowPaymentModal(true)}>Elegir medio de pago</button>
            <p>{paymentMethod || "Seleccionar metodo de pago"}</p>

            {showPaymentModal && <PaymentInstrument onSubmit={handlePaymentSubmit} />}

            <div className="summary">
                <h3>Resumen de la compra</h3>
                <p>Productos: ${totalPrice}</p>
                <p>Total cargos: $3500</p>
                <p>Total: ${totalPrice + 3500}</p>
                <button className="btn btn-outline-secondary btn-sm continue-buying" onClick={handleOrder}>Pedir</button>
            </div>
        </div>
    );
};

export default Checkout;
