// src/front/js/component/address.js

import React, { useState } from 'react';
import '../../styles/address.css';

const Address = ({ onSubmit, onClose }) => {
    const [address, setAddress] = useState("");
    const [apartment, setApartment] = useState("");
    const [countryCode, setCountryCode] = useState("+56");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullAddress = `${address}, ${apartment}, ${countryCode} ${phone}`;
        onSubmit(fullAddress);
    };

    return (
        <div className="address-modal">
            <div className="modal-header">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Agregar dirección</h2>
            </div>
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
                    Código de país:
                    <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                        <option value="+56">Chile (+56)</option>
                        <option value="+1">USA (+1)</option>
                        <option value="+44">UK (+44)</option>
                        {/* Aca podemos agregar mas telefonos más opciones de país si es necesario */}
                    </select>
                </label>
                <label>
                    Número de celular:
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </label>
                <p className="info-text">Si no te encontramos en el teléfono de tu cuenta, te contactaremos a este número.</p>
                <button type="submit" className="btn btn-primary">Agregar dirección</button>
            </form>
        </div>
    );
};

export default Address;
