import React, { useState } from 'react';
import "../../styles/Seguridad.css";

const Seguridad = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="security-form">
      <h2 className="security-title">Cambiar contraseña</h2>
      <div className="form-group">
        <label htmlFor="currentPassword">Contraseña actual</label>
        <input type="password" id="currentPassword" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">Nueva contraseña</label>
        <input
          type="password"
          id="newPassword"
          className="form-control"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar nueva contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          if (newPassword !== confirmPassword) {
            alert('El campo nueva contraseña y confirmar nueva contraseña deben coincidir.');
          }
        }}
      >
        Guardar
      </button>
    </div>
  );
};

export default Seguridad;
