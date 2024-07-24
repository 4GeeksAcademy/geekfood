import React from "react";
import './newsletter.css';

export const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Suscríbete para recibir ofertas exclusivas</h2>
        <p>Recibe ofertas y novedades directamente en tu correo</p>
      </div>
      <div className="newsletter-form">
        <input type="email" placeholder="Ingresa tu correo" className="newsletter-input" />
        <button className="newsletter-button">Suscríbete</button>
      </div>
      <p className="newsletter-terms">
        Al hacer clic en Suscríbete, confirmas que estás de acuerdo con nuestros Términos y Condiciones.
      </p>
    </div>
  );
};

export default Newsletter;

