import React, { useState } from 'react';
import '../../styles/MediosPago.css';

const MediosPago = () => {
  const [savedMethods, setSavedMethods] = useState([
    { id: 1, type: 'Visa Classic', number: '•••• 4242' },
    { id: 2, type: 'Mastercard', number: '•••• 2329' },
    { id: 3, type: 'American Express', number: '•••• 2314' },
  ]);

  const [newCardNumber, setNewCardNumber] = useState('');
  const [newNameOnCard, setNewNameOnCard] = useState('');
  const [newExpDate, setNewExpDate] = useState('');
  const [newCvv2, setNewCvv2] = useState('');

  const handleDeleteMethod = (id) => {
    setSavedMethods(savedMethods.filter(method => method.id !== id));
  };

  const handleSaveNewMethod = () => {
    if (newCardNumber.length >= 4) {
      const lastFourDigits = newCardNumber.slice(-4);
      const newMethod = {
        id: Date.now(),
        type: 'Visa Classic',
        number: `•••• ${lastFourDigits}`
      };
      setSavedMethods([...savedMethods, newMethod]);

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
          <input
            type="text"
            id="cardNumber"
            className="form-control"
            value={newCardNumber}
            onChange={(e) => setNewCardNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nameOnCard">Name on card</label>
          <input
            type="text"
            id="nameOnCard"
            className="form-control"
            value={newNameOnCard}
            onChange={(e) => setNewNameOnCard(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expDate">Exp Date</label>
          <input
            type="text"
            id="expDate"
            className="form-control"
            value={newExpDate}
            onChange={(e) => setNewExpDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv2">CVV2</label>
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
