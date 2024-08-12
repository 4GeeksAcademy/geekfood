import React from 'react';
import "../../styles/downloadApp.css";
import download from "../../img/download.png";
import backgroundImage from "../../img/password.png";

export const DownloadApp = () => {
  return (
    <div className="download-app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div>
        <h2>Descarga nuestra app ahora</h2>
        <p>Regístrate y comienza a hacer pedidos de comida rápida</p>
        <a className="btn btn-secondary btn-sm me-2" href="https://www.apple.com/cl/app-store/" target="_blank" rel="noopener noreferrer">¡Descargar iOS!</a>
        <a className="btn btn-secondary btn-sm" href="https://play.google.com/store/apps?hl=es_CL&pli=1" target="_blank" rel="noopener noreferrer">¡Descargar Android!</a>
      </div>
      <div className="download-app-image">
        <img src={download} alt="App placeholder" />
      </div>
    </div>
  );
};
