import React from 'react';
import '../../styles/InfoCuenta.css';

const InfoCuenta = ({ name, setName }) => {
  
  return (
    <div className="info-basic">
      <h3>Información básica</h3>

      <div className="info-field">
        <label>Nombre(s):</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      <div className="info-field">
        <label>Teléfono:</label>
        <input
          type="text"
          onChange={(e) => console.log('Teléfono cambiado')} 
        />
      </div>

      <div className="info-field">
        <label>Dirección:</label>
        <input
          type="text"
          onChange={(e) => console.log('Dirección cambiada')} 
        />
      </div>

      <button className="save-button" onClick={() => console.log('Datos guardados')}>Guardar datos</button>
    </div>
  );
};

export default InfoCuenta;
