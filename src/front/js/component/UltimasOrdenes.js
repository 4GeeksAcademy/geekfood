import React from 'react';
import '../../styles/UltimasOrdenes.css';
import macasImg from '../../img/macas.png';
import pizzaCocaImg from '../../img/pizza_coca.png';

const UltimasOrdenes = () => {
  const orders = [
    {
      id: 12345,
      date: "2024-07-20",
      total: "$18.990",
      address: "Calle 456, Santiago",
      restaurant: "Papa John's",
      items: [
        "Pizza Margarita x 1",
        "Bebida Coca Cola x 2"
      ],
      image: pizzaCocaImg
    },
    {
      id: 12346,
      date: "2024-07-25",
      total: "$12.990",
      address: "Calle 456, Santiago",
      restaurant: "McDonald's",
      items: [
        "Burger Clásica x 2",
        "Papas Fritas x 1"
      ],
      image: macasImg
    }
  ];

  return (
    <div className="ultimas-ordenes-container mt-4">
      <h3>Últimas órdenes</h3>
      {orders.length === 0 ? (
        <p>No tienes órdenes recientes.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="card mb-3 ultimas-ordenes-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={order.image} className="img-fluid rounded-start" alt="Order" />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="ultimas-ordenes-card-body card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="ultimas-ordenes-card-title card-title">{order.restaurant}</h5>
                      <p className="ultimas-ordenes-card-text card-text">Fecha: {order.date}</p>
                      <p className="ultimas-ordenes-card-text card-text">Total: {order.total}</p>
                      <p className="ultimas-ordenes-card-text card-text">Dirección: {order.address}</p>
                    </div>
                    <div className="col-md-6">
                      <p className="ultimas-ordenes-card-text card-text"><strong>Productos:</strong></p>
                      <ul className="list-unstyled">
                        {order.items.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UltimasOrdenes;
