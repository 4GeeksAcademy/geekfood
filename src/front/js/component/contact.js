import React from 'react';

export const Contact = () => {
  return (
    <div className="container text-center my-5">
      <h2>¡Contáctanos!</h2>
      <p>Estamos aquí para ayudarte.</p>
      <div className="row">
        <div className="col-md-4">
          <i className="bi bi-envelope-fill" style={{ fontSize: '2rem' }}></i>
          <h5 className="mt-3">Email</h5>
          <p>Escríbenos al siguiente correo electrónico.</p>
          <a href="mailto:hello@relume.io">hello@relume.io</a>
        </div>
        <div className="col-md-4">
          <i className="bi bi-telephone-fill" style={{ fontSize: '2rem' }}></i>
          <h5 className="mt-3">Teléfono</h5>
          <p>Contáctanos al siguiente número telefónico.</p>
          <a href="">+1 (555) 000-0000</a>
        </div>
        <div className="col-md-4">
          <i className="bi bi-geo-alt-fill" style={{ fontSize: '2rem' }}></i>
          <h5 className="mt-3">Oficina</h5>
          <p>También puedes visitarnos en nuestra oficina.</p>
          <p>123 Sample St, Sydney NSW 2000 AU</p>
        </div>
      </div>
    </div>
  );
};

