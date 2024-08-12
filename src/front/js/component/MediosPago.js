import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/MediosPago.css';

const MediosPago = () => {
  const { store, actions } = useContext(Context);
  const [newCardNumber, setNewCardNumber] = useState('');
  const [newNameOnCard, setNewNameOnCard] = useState('');
  const [newExpDate, setNewExpDate] = useState('');
  const [newCvv2, setNewCvv2] = useState('');

  useEffect(() => {
    actions.getAllPaymentMethods();
  }, [actions]);

  const handleDeleteMethod = (id) => {
    actions.deletePaymentMethod(id);
  };

  const handleSaveNewMethod = () => {
    if (newCardNumber.length >= 4) {
      const lastFourDigits = newCardNumber.slice(-4);
      const newMethod = {
        card_name: newNameOnCard,
        card_number: `•••• ${lastFourDigits}`,
        exp_date: newExpDate,
        cvv2: newCvv2
      };

      actions.createPaymentMethod(newMethod);

      setNewCardNumber('');
      setNewNameOnCard('');
      setNewExpDate('');
      setNewCvv2('');
    } else {
      alert('El número de la tarjeta debe tener al menos 4 dígitos.');
    }
  };

  return (
    <div className="payment-methods">
      <h3>Medios de pagos agregados</h3>
      <div className="saved-methods">

        {store.paymentMethods.map(method => (
          <div key={method.id} className="saved-method">
            <i className="bi bi-credit-card"></i>
            <span>{method.card_name}</span>
            <span className="card-number">{method.card_number}</span>
            <span className="card-number">{method.exp_date}</span>
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
          <label htmlFor="cardNumber">Número de tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            className="form-control"
            value={newCardNumber}
            onChange={(e) => setNewCardNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nameOnCard">Nombre en la tarjeta</label>
          <input
            type="text"
            id="nameOnCard"
            className="form-control"
            value={newNameOnCard}
            onChange={(e) => setNewNameOnCard(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv2">Fecha Vencimiento</label>
          <input
            type="text"
            id="cvv2"
            className="form-control"
            value={newExpDate}
            onChange={(e) => setNewExpDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv2">CVV</label>
          <input
            type="text"
            id="cvv2"
            className="form-control"
            value={newCvv2}
            onChange={(e) => setNewCvv2(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSaveNewMethod}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default MediosPago;
