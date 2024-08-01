import React, { useState } from 'react';
import "../../styles/userProfile.css";
import perfil from '../../img/profilePhoto.jpg';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('infoCuenta');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [savedMethods, setSavedMethods] = useState([
    { id: 1, type: 'Visa Classic', number: '•••• 4242' },
    { id: 2, type: 'Mastercard', number: '•••• 2329' },
    { id: 3, type: 'American Express', number: '•••• 2314' },
  ]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState('David Nazariego');

  const handleDeleteMethod = (id) => {
    setSavedMethods(savedMethods.filter(method => method.id !== id));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'infoCuenta':
        return (
          <div className="info-basic">
            <h3>Información básica</h3>
            <p>
              <strong>Nombre: </strong>
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
            </p>
            <p><strong>Número de teléfono:</strong> +12345678987</p>
            <p><strong>Email:</strong> hola@gmail.com</p>
          </div>
        );
      case 'mediosPago':
        return (
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
        return <div><h2>Últimas órdenes</h2></div>;
      case 'seguridad':
        return (
          <div className="security-form">
            <h3 className="security-title">Cambiar contraseña</h3>
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
            <h3 className="security-title">Experiencias de nuestros clientes</h3>
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
``
