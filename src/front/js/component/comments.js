import React, { useState, useEffect } from 'react';
import StarRating from './starRating';

export const Comentarios = () => {
    const [commentText, setCommentText] = useState("");
    const [comentarios, setComentarios] = useState([
        { id: 1, nombre: 'Cliente 1', contenido: '¡Excelente servicio!', rating: 5 },
        { id: 2, nombre: 'Cliente 2', contenido: 'Muy buen producto.', rating: 4 },
        { id: 3, nombre: 'Cliente 3', contenido: 'Me encantó la experiencia.', rating: 3 },
        { id: 4, nombre: 'Cliente 4', contenido: 'Recomiendo totalmente.', rating: 5 },
        { id: 5, nombre: 'Cliente 5', contenido: 'Volvería a comprar aquí.', rating: 4 },
    ]);

    const enviarComentario = () => {
        // Aquí normalmente iría la lógica para enviar el comentario al servidor
        // Por ahora, no hacemos nada
        setCommentText(""); // Limpiar el área de texto después de enviar
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
                                    <div key={comentario.id} className="col-4 mb-3">
                                        <div className="border p-3">
                                            <StarRating rating={comentario.rating} />
                                            <p className="mt-2">{comentario.nombre}</p>
                                            <p>{comentario.contenido}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        {/* agregar el área de texto para el comentario */}
                        <textarea
                            id="commentText"
                            className="form-control"
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