import React from 'react';
import "../../styles/footer.css";
import icon from "../../img/icon.png";

export const Footer = () => (
  <footer className="footer">
    <div className="container d-flex flex-column align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-md-6 ">
          {/*           <a href="/"><img src={icon} alt="icon" className="navbar-icon" /></a>
 */}          <p>Únete a nuestro boletín para mantenerte al día de las características y lanzamientos.</p>
          <div className="newsletter-formm">
            <input type="email" placeholder="Ingresa tu correo" className="newsletter-inputt" />
          </div>
          <div className="">
            <button className="btn" href="/suscription">Suscríbete</button>
          </div>
          <small>
            Al suscribirte, aceptas nuestra Política de Privacidad y das tu consentimiento para recibir actualizaciones de nuestra empresa.
          </small>
        </div>
        <div className="col-md-3 text-center">
          <h5>Mas información</h5>
          <ul className="social-icons">
            <li><a href="#faq">Preguntas Frecuentes</a></li>
            <li><a href="#contact">Contáctanos</a></li>
            <li><a href="#whyus">¿Porqué escogernos?</a></li>
            <li><a href="#starRating">Calificaciones</a></li>
            <li><a href="#">Descarga nuestra App</a></li>
          </ul>
        </div>
        <div className="col-md-3 text-center">
          <h5>Síguenos</h5>
          <ul className="social-icons">
            <li><a href="#"><i className="bi bi-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="bi bi-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="bi bi-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
            <li><a href="#"><i className="bi bi-youtube"></i> Youtube</a></li>
          </ul>
        </div>
      </div>
      <div className="row mt-5 w-100 justify-content-center">
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
