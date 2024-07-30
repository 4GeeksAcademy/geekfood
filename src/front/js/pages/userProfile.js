import React, { useState } from 'react';
import "../../styles/userProfile.css";
import perfil from '../../img/takeout.jpg';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('infoCuenta');

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

  const renderContent = () => {
    switch (activeTab) {
      case 'infoCuenta':
        return (
          <div>
            <h2>Información de la cuenta</h2>
            <h3>Información básica</h3>
            <p><strong>Nombre:</strong> David Nazariego</p>
            <p><strong>Número de teléfono:</strong> +12345678987</p>
            <p><strong>Email:</strong> hola@gmail.com</p>
          </div>
        );
      case 'mediosPago':
        return (
          <div className="payment-methods">
            <div className="saved-methods">
              <div className="saved-method">
                <i className="bi bi-credit-card"></i>
                <span>Visa Classic</span>
                <span className="card-number">•••• 4242</span>
              </div>
              <div className="saved-method">
                <i className="bi bi-credit-card"></i>
                <span>Mastercard</span>
                <span className="card-number">•••• 2329</span>
              </div>
              <div className="saved-method">
                <i className="bi bi-credit-card"></i>
                <span>American Express</span>
                <span className="card-number">•••• 2314</span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="new-method">
              <h3>Agregar un nuevo medio de pago</h3>
              <div className="form-group">
                <label htmlFor="cardNumber">Card number</label>
                <input type="text" id="cardNumber" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="nameOnCard">Name on card</label>
                <input type="text" id="nameOnCard" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="expDate">Exp Date</label>
                <input type="text" id="expDate" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="cvv2">CVV2</label>
                <input type="text" id="cvv2" className="form-control" />
              </div>
              <button className="btn">Guardar</button>
            </div>
          </div>
        );
      case 'ultimasOrdenes':
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
      case 'seguridad':
        return <div><h2>Seguridad</h2></div>;
      default:
        return null;
    }
  };

  return (
    <div className="user-profile-container">
      <nav className="sidebar">
        <div className="sidebar-sticky">
          <div className="profile text-center">
            <img src={perfil} alt="Perfil" className="img-fluid rounded-circle" />
            <h4>Mi perfil</h4>
            <p>David</p>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setActiveTab('infoCuenta')}>
                Información de cuenta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setActiveTab('mediosPago')}>
                Medios de pago
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setActiveTab('ultimasOrdenes')}>
                Últimas órdenes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setActiveTab('seguridad')}>
                Seguridad
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserProfile;
