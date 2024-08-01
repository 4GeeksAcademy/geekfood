import React, { useState } from "react";
import "../../styles/newsletter.css";

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
      <div className="newsletter-content">
        <h2>Suscríbete para recibir ofertas exclusivas</h2>
        <p>Recibe ofertas y novedades directamente en tu correo</p>
      </div>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Ingresa tu correo"
          className="newsletter-input"
        />
        <button type="submit" className="btn">
          Suscríbete
        </button>
      </form>
      <p className="newsletter-terms">
        Al hacer clic en Suscríbete, confirmas que estás de acuerdo con nuestros Términos y Condiciones.
      </p>
    </div>
  );
};
