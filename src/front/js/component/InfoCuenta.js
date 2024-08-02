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
          onChange={(e) => setName(e.target.value)} // Actualiza el estado del nombre en UserProfile
        />
      </div>

      <div className="info-field">
        <label>Teléfono:</label>
        <input
          type="text"
          onChange={(e) => console.log('Teléfono cambiado')} // Solo un ejemplo, puedes actualizar con más lógica
        />
      </div>

      <div className="info-field">
        <label>Dirección:</label>
        <input
          type="text"
          onChange={(e) => console.log('Dirección cambiada')} // Solo un ejemplo, puedes actualizar con más lógica
        />
      </div>

      <button className="save-button" onClick={() => console.log('Datos guardados')}>Guardar datos</button>
    </div>
  );
};

export default InfoCuenta;
