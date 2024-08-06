// src/front/js/pages/checkout.js

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/checkout.css';
import Address from '../component/address';
import PaymentInstrument from '../component/paymentinstrument';
import { useCart } from '../component/cart'; 

const Checkout = () => {
    const location = useLocation();
    const { cart, totalPrice, restaurantName, restaurantImgSrc } = location.state;
    const navigate = useNavigate();
    const { setCart } = useCart(); 
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
        setCart([]); // Vacía el carrito
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
            <div className="detalle-de-entrega">
                <h2>Detalle de entrega</h2>
                <div><button className="btn-agregar-direccion" onClick={() => setShowAddressModal(true)}>Agregar dirección</button>
                <div></div><button className="btn-eliminar" onClick={() => setAddress("")}>Eliminar</button></div>
                <p>Dirección: {address || "Ingresar dirección"}</p>
                {showAddressModal && (
                    <Address
                        onSubmit={handleAddressSubmit}
                        onClose={() => setShowAddressModal(false)}
                    />
                )}
            </div>

            <div className="medios-de-pago">
                <h2>Medios de pago</h2>
                <button className="btn" onClick={() => setShowPaymentModal(true)}>Elegir medio de pago</button>
                <p>{paymentMethod || "Seleccionar método de pago"}</p>
                {showPaymentModal && (
                    <PaymentInstrument
                        onSubmit={handlePaymentSubmit}
                        onClose={() => setShowPaymentModal(false)}
                    />
                )}
            </div>

            <div className="summary-checkout">
                <h2>Resumen de la compra</h2>
                <p>Productos: ${totalPrice}</p>
                <p>Total cargos envío: $3500</p>
                <p>Total: ${totalPrice + 3500}</p>
                <div><button className="btn-summary-continuar-compra" onClick={handleOrder}>Continuar compra</button></div>
                <div><button className="btn-summary-seguir-comprando">Seguir comprando</button></div>
            </div>
        </div>
    );
};

export default Checkout;
