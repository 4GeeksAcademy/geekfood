// src/front/js/component/paymentinstrument.js

import React, { useState } from 'react';
import '../../styles/paymentinstrument.css';

const PaymentInstrument = ({ onSubmit }) => {
    const [selectedPayment, setSelectedPayment] = useState("");

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
                    <did>
                        <label>
                            <input type="radio" name="payment" value="Visa Classic" onChange={() => handleSelectPayment("Visa Classic")} />
                            Visa Classic **** 4242
                        </label>
                    </did>
                    <div>
                        <label>
                            <input type="radio" name="payment" value="Mastercard" onChange={() => handleSelectPayment("Mastercard")} />
                            Mastercard **** 2329
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="payment" value="American Express" onChange={() => handleSelectPayment("American Express")} />
                            American Express **** 2314
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Continuar</button>
            </form>
        </div>
    );
};

export default PaymentInstrument;
