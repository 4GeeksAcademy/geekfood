import React from 'react';
import "../../styles/downloadApp.css";
import download from "../../img/download.png"

export const DownloadApp = () => {
  return (
    <div className="download-app-container py-5 my-5 ">
      <div>
        <h2>Descarga nuestra app ahora</h2>
        <p>Regístrate y comienza a hacer pedidos de comida rápida</p>
        <button className="btn btn-secondary btn-sm me-2">¡Descargar iOS!</button>
        <button className="btn btn-secondary btn-sm">¡Descargar Android!</button>
      </div>
      <div className="download-app-image">
        <img src={download} alt="App placeholder" />
      </div>
    </div>
  );
};

