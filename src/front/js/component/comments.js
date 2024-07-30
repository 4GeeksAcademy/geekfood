// src/front/js/component/Comentarios.js
import React, { useState } from 'react';
import StarRating from './starRating';

export const Comentarios = () => {
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);
  const [comentarios, setComentarios] = useState([]);

  const enviarComentario = () => {
    if (commentText.trim() === "" || rating === 0) return;

    const nuevoComentario = {
      id: Date.now(),
      nombre: 'Nuevo Cliente',
      contenido: commentText,
      rating: rating
    };

    setComentarios([...comentarios, nuevoComentario]);
    setCommentText("");
    setRating(0);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Nuestras calificaciones</h3>
              <div className="row">
                {comentarios.map(comentario => (
                  <div key={comentario.id} className="col-12 mb-3">
                    <div className="border p-3">
                      <StarRating rating={comentario.rating} />
                      <p className="mt-2">{comentario.nombre}</p>
                      <p><strong>{comentario.contenido}</strong></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <StarRating rating={rating} onChange={setRating} />
            <textarea
              id="commentText"
              className="form-control mt-2"
              placeholder="Escribe tu comentario aquí..."
              rows="4"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <br />
            <button onClick={enviarComentario} className="btn btn-primary mt-2">Enviar Comentario</button>
          </div>
        </div>
      </div>
    </div>
  );
};
