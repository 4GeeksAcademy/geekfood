import React from 'react';
import "../../styles/downloadApp.css";
import download from "../../img/download.png"

export const DownloadApp = () => {
  return (

    <div className="download-app-container my-5 py-5 w-100">
      <div className="download-app-content">
        <h2>Descarga nuestra app ahora</h2>
        <p>Regístrate y comienza a hacer pedidos de comida rápida</p>
        <div className="download-app-buttons">
          <button className="download-button">Descargar</button>
          <button className="register-button">Registrarse</button>
        </div>
      </div>
      <div className="download-app-image">
        <img src={download} alt="App placeholder" />
      </div>
    </div>
  );
};

