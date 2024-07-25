import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Logo</h5>
          <p>Únete a nuestro boletín para mantenerte al día de las características y lanzamientos.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Ingresa tu correo electrónico" />
            <button type="submit">Suscribirse</button>
          </form>
          <small>
            Al suscribirte, aceptas nuestra Política de Privacidad y das tu consentimiento para recibir actualizaciones de nuestra empresa.
          </small>
        </div>
        <div className="col-md-2">
          <h5>Columna Uno</h5>
          <ul>
            <li><a href="#">Enlace Uno</a></li>
            <li><a href="#">Enlace Dos</a></li>
            <li><a href="#">Enlace Tres</a></li>
            <li><a href="#">Enlace Cuatro</a></li>
            <li><a href="#">Enlace Cinco</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Columna Dos</h5>
          <ul>
            <li><a href="#">Enlace Seis</a></li>
            <li><a href="#">Enlace Siete</a></li>
            <li><a href="#">Enlace Ocho</a></li>
            <li><a href="#">Enlace Nueve</a></li>
            <li><a href="#">Enlace Diez</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Síguenos</h5>
          <ul className="social-icons">
            <li><a href="#"><i className="bi bi-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="bi bi-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="bi bi-twitter"></i> X</a></li>
            <li><a href="#"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
            <li><a href="#"><i className="bi bi-youtube"></i> Youtube</a></li>
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <small>Santiago Full-Time 25 2024 4geek</small>
          <ul className="footer-links">
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos de Servicio</a></li>
            <li><a href="#">Configuración de Cookies</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
