import React from 'react';
import './DownloadApp.css';

export const DownloadApp = () => {
  return (
    
    <div className="download-app-container">
      <div className="download-app-content">
        <h2>Descarga nuestra app ahora</h2>
        <p>Regístrate y comienza a hacer pedidos de comida rápida</p>
        <div className="download-app-buttons">
          <button className="download-button">Descargar</button>
          <button className="register-button">Registrarse</button>
        </div>
      </div>
      <div className="download-app-image">
        <img src="https://via.placeholder.com/300" alt="App placeholder" />
      </div>
    </div>
  );
};

export default DownloadApp;
