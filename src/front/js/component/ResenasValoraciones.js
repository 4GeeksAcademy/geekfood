import React, { useState } from 'react';
import '../../styles/ResenasValoraciones.css';

const ResenasValoraciones = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');

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
};

export default ResenasValoraciones;
