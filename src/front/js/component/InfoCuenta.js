import React, { useState } from 'react';
import '../../styles/InfoCuenta.css';

const InfoCuenta = () => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState('David Nazariego');

  return (
    <div className="info-basic">
      <h3>Información básica</h3>
      <p>
        <strong>Nombre: </strong>
        {isEditingName ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setIsEditingName(false)}
            autoFocus
          />
        ) : (
          <>
            {name} <i className="bi bi-pen" onClick={() => setIsEditingName(true)}></i>
          </>
        )}
      </p>
      <p><strong>Número de teléfono:</strong> +12345678987</p>
      <p><strong>Email:</strong> hola@gmail.com</p>
    </div>
  );
};

export default InfoCuenta;
