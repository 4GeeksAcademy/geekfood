import React, { useState } from "react";
import "../../styles/newsletter.css";
import { Link } from "react-router-dom";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("¡Te has suscrito exitosamente!");
        setEmail("");
      } else {
        alert("Hubo un error. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error. Intenta de nuevo.");
    }
  };

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
          <Link className="btn" to="/suscription">Suscríbete</Link>
        </div>
        <p className="newsletter-terms">
          <strong> Al hacer clic en Suscríbete, confirmas que estás de acuerdo con nuestros Términos y Condiciones.</strong>
        </p>
      </div>
    </div>
  );
};
