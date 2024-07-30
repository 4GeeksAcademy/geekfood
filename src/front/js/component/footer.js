import React from 'react';
import "../../styles/footer.css";
import icon from "../../img/GEEK2.png";
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3 text-center">
          <img src={icon} alt="Logo" className="footer-logo mb-3" />
          <p>Disfruta de la mejor comida rápida con nosotros.</p>
        </div>
        <div className="section col-md-3 text-center">
          <h5 className="mb-3">Más Información</h5>
          <ul className="social-icons">
            <li><Link to="/faq" >Preguntas Frecuentes</Link></li>
            <li><Link to="/contactUs" >Contáctanos</Link></li>
            <li><Link to="/whyus" >¿Por qué escogernos?</Link></li>
            <li><Link to="/starRating" >Calificaciones</Link></li>
            <li><Link to="/downloadApp" >Descarga nuestra App</Link></li>
          </ul>
        </div>
        <div className="section col-md-3 text-center">
          <h5 className="mb-3">Síguenos</h5>
          <ul className="social-icons">
            <li><a href="#" className="bi bi-facebook"> Facebook</a></li>
            <li><a href="#" ><i className="bi bi-instagram"></i> Instagram</a></li>
            <li><a href="#" ><i className="bi bi-twitter"></i> Twitter</a></li>
            <li><a href="#" ><i className="bi bi-linkedin"></i> LinkedIn</a></li>
            <li><a href="#" ><i className="bi bi-youtube"></i> YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-12 text-center">
          <small>&copy; 2024 Santiago Full-Time 25, 4Geeks. Todos los derechos reservados.</small>
          <ul className="footer-links list-inline mt-3">
            <li className="list-inline-item"><a href="#" >Política de Privacidad</a></li>
            <li className="list-inline-item"><a href="#" >Términos de Servicio</a></li>
            <li className="list-inline-item"><a href="#" >Configuración de Cookies</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer >
);
