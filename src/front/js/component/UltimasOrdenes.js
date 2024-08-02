import React from 'react';
import '../../styles/UltimasOrdenes.css';

const UltimasOrdenes = () => {
  const orders = [
    {
      id: 12345,
      date: "2024-07-20",
      total: "$18.990",
      address: "Calle 456, Santiago",
      status: "completed",
      restaurant: "Papa John's",
      items: [
        "Pizza Margarita x 1",
        "Bebida Coca Cola x 2"
      ]
    },
    {
      id: 12346,
      date: "2024-07-25",
      total: "$12.990",
      address: "Calle 456, Santiago",
      status: "pending",
      restaurant: "Burger King",
      items: [
        "Burger Clásica x 2",
        "Papas Fritas x 1"
      ]
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success';
      case 'pending':
        return 'text-warning';
      default:
        return '';
    }
  };

  return (
    <div className="container mt-4">
      <h3>Últimas órdenes</h3>
      {orders.length === 0 ? (
        <p>No tienes órdenes recientes.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://via.placeholder.com/150" className="img-fluid rounded-start" alt="Order" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="card-title">{order.restaurant}</h5>
                      <p className="card-text">Fecha: {order.date}</p>
                      <p className="card-text">Total: {order.total}</p>
                      <p className="card-text">Dirección: {order.address}</p>
                    </div>
                    <div className="col-md-6">
                      <p className="card-text"><strong>Productos:</strong></p>
                      <ul className="list-unstyled">
                        {order.items.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                      <p className={`order-status ${getStatusClass(order.status)}`}>
                        <strong>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</strong>
                      </p>
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
