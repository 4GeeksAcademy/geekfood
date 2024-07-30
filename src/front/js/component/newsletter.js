import React from "react";
import "../../styles/newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="cont">
        <div className="newsletter-content">
          <h2>Suscríbete para recibir ofertas exclusivas</h2>
          <p>Recibe ofertas y novedades directamente en tu correo</p>
        </div>
        <div className="newsletter-formm">
          <input type="email" placeholder="Ingresa tu correo" className="newsletter-inputt" />
        </div>
        <div className="">
          <a className="btn" href="/suscription">Suscríbete</a>
        </div>
        <p className="newsletter-terms">
          <strong> Al hacer clic en Suscríbete, confirmas que estás de acuerdo con nuestros Términos y Condiciones.</strong>
        </p>
      </div>
    </div>
  );
};
