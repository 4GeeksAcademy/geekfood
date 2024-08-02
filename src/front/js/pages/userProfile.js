import React, { useContext, useEffect, useState } from 'react';
import "../../styles/userProfile.css";
import perfil from '../../img/profilePhoto.jpg';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';


const UserProfile = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  //metodos de pago
  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardName, setNewCardName] = useState('');
  const [newExpDate, setNewExpDate] = useState('');
  const [newCVV2, setNewCVV2] = useState('');

  //informacion del usuario
  const [activeTab, setActiveTab] = useState('infoCuenta');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [savedMethods, setSavedMethods] = useState([
    { id: 1, type: 'Visa Classic', number: '•••• 4242' },
    { id: 2, type: 'Mastercard', number: '•••• 2329' },
    { id: 3, type: 'American Express', number: '•••• 2314' },
  ]);

  // ratings 
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState('David Nazariego');

  useEffect(() => {
    if (store.access_token !== null) {
      actions.perfil();
    } else {
      navigate('/login');
    }
  }, [store.access_token, navigate]);

  useEffect(() => {
    if (store.profile) {
      setName(store.profile.name);
      setPhoneNumber(store.profile.phone);
      // Otros datos que quieras mostrar

    }
  }, [store.profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      name: name,
      phone: phoneNumber,
      // Otros datos que quieras actualizar
    };


    const resp = await actions.UpdatePerfil(datos)
    if (resp.status === 'success') {
      success(resp.message)
    } else {
      error(resp.message)
    }
  }

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

  //metodos de pago 
  useEffect(() => {
    if (store.access_token !== null) {
      actions.getAllPaymentMethods();
    } else {
      navigate('/login');
    }
  }, [store.access_token]);

  // Actualiza `savedMethods` al cambiar `store.paymentMethods`
  useEffect(() => {
    if (store.paymentMethods) {
      setSavedMethods(store.paymentMethods);
    }
  }, [store.paymentMethods]);

  // Maneja la creación de un nuevo método de pago
  const handleSaveNewMethod = async () => {
    const newMethod = {
      card_number: newCardNumber,
      card_name: newCardName,
      exp_date: newExpDate,
      cvv2: newCVV2,
    };

    const resp = await actions.createPaymentMethod(newMethod);
    if (resp.status === 'success') {
      success(resp.message);
    } else {
      error(resp.message);
    }

    // Limpia los campos después de agregar
    setNewCardNumber('');
    setNewCardName('');
    setNewExpDate('');
    setNewCVV2('');
  };

  // Maneja la eliminación de un método de pago
  const handleDeleteMethod = async (id) => {
    const resp = await actions.deletePaymentMethod(id);
    if (resp.status === 'success') {
      toast.success(resp.message);
    } else {
      toast.error(resp.message);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      //info cuenta
      case 'infoCuenta':
        return (

          <div className="info-basic">
            <h3>Información básica</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nombre:</label>
                {isEditingName ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setIsEditingName(false)}
                    autoFocus
                  />
                ) : (
                  <>
                    {name} <i className="bi bi-pen" onClick={() => setIsEditingName(true)}></i>
                  </>
                )}
              </div>
              <div>
                <label>Número de teléfono:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label>Email:</label>
                <p>{store?.profile?.email}</p>
              </div>
              <button type="submit" className='btn'>Guardar cambios</button>
            </form>
          </div>
        );
      //metodos de pago
      case 'mediosPago':
        return (
          <div className="container-fluid">
            {/* agregar metodos de pago */}
            <section className="col-md-6 w-100">
              <div className="new-method">
                <h3>Agregar un nuevo medio de pago</h3>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card number</label>
                  <input type="text" id="cardNumber" className="form-control" value={newCardNumber} onChange={(e) => setNewCardNumber(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="nameOnCard">Name on card</label>
                  <input type="text" id="nameOnCard" className="form-control" value={newCardName} onChange={(e) => setNewCardName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv2">CVV2</label>
                  <input type="text" id="cvv2" className="form-control" value={newCVV2} onChange={(e) => setNewCVV2(e.target.value)} />
                </div>
                <button onClick={handleSaveNewMethod} className="btn btn-primary">Save New Method</button>
              </div>
            </section >

            {/* metodos de pago */}
            <section className="col-md-6 w-100">
              <div className="payment-methods">
                <h3>Medios de pagos agregados</h3>
                <div className="saved-methods">
                  {savedMethods.map(method => (
                    <div key={method.id} className="saved-method">
                      <i className="bi bi-credit-card"></i>
                      <span>{method.type}</span>
                      <span className="card-number">{method.number}</span>
                      <i
                        className="bi bi-trash3 delete-icon"
                        onClick={() => handleDeleteMethod(method.id)}
                      ></i>
                    </div>
                  ))}
                </div>
              </div>
            </section>

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
        return (
          <div className="security-form">
            <h2 className="security-title">Cambiar contraseña</h2>
            <div className="form-group">
              <label htmlFor="currentPassword">Contraseña actual</label>
              <input type="password" id="currentPassword" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">Nueva contraseña</label>
              <input
                type="password"
                id="newPassword"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar nueva contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="btn"
              onClick={() => {
                if (newPassword !== confirmPassword) {
                  alert('El campo nueva contraseña y confirmar nueva contraseña deben coincidir.');
                }
              }}
            >
              Guardar
            </button>
            <div className="divider"></div>
            <h3 className="security-title">Cambiar número de teléfono</h3>
            <div className="form-group">
              <label htmlFor="phoneNumber">Ingresa tu nuevo número de teléfono</label>
              <input
                type="text"
                id="phoneNumber"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button
              className="btn"
              onClick={() => {
                alert('Número de teléfono actualizado.');
              }}
            >
              Guardar
            </button>
          </div>
        );
      case 'resenasValoraciones':
        return (
          <div className="reviews-section">
            <h2 className="security-title">Experiencias de nuestros clientes</h2>
            <div className="stars">
              {[1, 2, 3, 4, 5].map(star => (
                <i
                  key={star}
                  className={`bi bi-star${star <= (hoverRating || rating) ? '-fill' : ''}`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  style={{ color: star <= (hoverRating || rating) ? 'yellow' : 'gray', fontSize: '24px' }}
                ></i>
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="review"></label>
              <textarea
                id="review"
                className="form-control"
                placeholder="Déjanos tu reseña aquí"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
            <button
              className="btn"
              onClick={() => {
                alert('Comentario enviado.');
                setReview('');
                setRating(0);
              }}
            >
              Enviar
            </button>
          </div>
        );
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
          <a
            href="#"
            className={`nav-link ${activeTab === 'infoCuenta' ? 'active' : ''}`}
            onClick={() => setActiveTab('infoCuenta')}
          >
            Información de cuenta
          </a>
          <a
            href="#"
            className={`nav-link ${activeTab === 'mediosPago' ? 'active' : ''}`}
            onClick={() => setActiveTab('mediosPago')}
          >
            Medios de pago
          </a>
          <a
            href="#"
            className={`nav-link ${activeTab === 'ultimasOrdenes' ? 'active' : ''}`}
            onClick={() => setActiveTab('ultimasOrdenes')}
          >
            Últimas órdenes
          </a>
          <a
            href="#"
            className={`nav-link ${activeTab === 'seguridad' ? 'active' : ''}`}
            onClick={() => setActiveTab('seguridad')}
          >
            Seguridad
          </a>
          <a
            href="#"
            className={`nav-link ${activeTab === 'resenasValoraciones' ? 'active' : ''}`}
            onClick={() => setActiveTab('resenasValoraciones')}
          >
            Reseñas y valoraciones
          </a>
        </div>
      </nav>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default UserProfile;
