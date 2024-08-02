// paymentinstrument.js
import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/paymentinstrument.css';

const PaymentInstrument = ({ onSubmit }) => {
    const { store, actions } = useContext(Context);
    const [selectedPayment, setSelectedPayment] = useState("");

    useEffect(() => {
        actions.getAllPaymentMethods();
    }, [actions]);

    const handleSelectPayment = (payment) => {
        setSelectedPayment(payment);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(selectedPayment);
    };

    return (
        <div className="payment-modal">
            <form onSubmit={handleSubmit}>
                <h3>Elige una forma de pago</h3>
                <div className="payment-options">
                    {store.paymentMethods.map((method, index) => (
                        <div key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name="payment"
                                    value={method.card_name}
                                    onChange={() => handleSelectPayment(method.card_name)}
                                />
                                {method.card_name} **** {method.card_number.slice(-4)}
                            </label>
                        </div>
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">Continuar</button>
            </form>
        </div>
    );
};

export default PaymentInstrument;
