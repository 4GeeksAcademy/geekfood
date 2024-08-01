// src/front/js/component/address.js

import React, { useState } from 'react';
import '../../styles/address.css';

const Address = ({ onSubmit }) => {
    const [address, setAddress] = useState("");
    const [apartment, setApartment] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullAddress = `${address}, ${apartment}, ${phone}`;
        onSubmit(fullAddress);
    };

    return (
        <div className="address-modal">
            <form onSubmit={handleSubmit}>
                <label>
                    Dirección:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </label>
                <label>
                    Departamento:
                    <input type="text" value={apartment} onChange={(e) => setApartment(e.target.value)} />
                </label>
                <label>
                    Número de celular:
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <button type="submit" className="btn btn-primary">Agregar dirección</button>
            </form>
        </div>
    );
};

export default Address;
