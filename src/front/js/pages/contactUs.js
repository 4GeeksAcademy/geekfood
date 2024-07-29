import React, { useState } from 'react';
import "../../styles/contactUs.css";
import imagen from "../../img/contact.png";

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (formElement.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="d-flex vh-100">
      <div className="left-side">
        <img src={imagen} className="d-block w-100 h-100" alt="..." />
      </div>
      <div className="right-side p-5">
        <h1>Contáctanos</h1>
        <p>Soporte al cliente siempre disponible.</p>
        <form
          noValidate
          className={validated ? 'was-validated' : ''}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Por favor ingrese su nombre.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Por favor ingrese un correo electrónico válido.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="invalid-feedback">
              Por favor ingrese su mensaje.
            </div>
          </div>
          <button type="submit" className="btn btn-secondary w-100">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
