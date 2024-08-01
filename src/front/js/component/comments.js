import React, { useState } from 'react';
import StarRating from './starRating';
import '../../styles/comments.css';

export const Comentarios = () => {
    const [commentText, setCommentText] = useState("");
    const [comentarios] = useState([
        { id: 1, nombre: 'Maria Salazar', contenido: '¡Excelente servicio!', rating: 5 },
        { id: 2, nombre: 'Daniel Guzmán', contenido: 'Muy buena aplicación.', rating: 4 },
        { id: 3, nombre: 'Miguen Sanhueza', contenido: 'Me encantó la experiencia.', rating: 3 },
        { id: 4, nombre: 'Carolina Mendez', contenido: 'Recomiendo totalmente.', rating: 4 },
        { id: 5, nombre: 'Veronica Landaeta', contenido: 'Volvería a comprar aquí.', rating: 5 },
    ]);

    const enviarComentario = () => {
        // Aquí normalmente iría la lógica para enviar el comentario al servidor
        // Por ahora, no hacemos nada
        setCommentText(""); // Limpiar el área de texto después de enviar
    };

    return (
        <div className="c-container w-100">
            <div className="row justify-content-center">
                <div className="col-md-8 cont">
                    <h2 className="text-center">Nuestras calificaciones</h2>
                    <p className="text-center mb-4">Acá puedes ver las calificaciones que nuestros clientes nos dejan.</p>
                    <div className="row">
                        {comentarios.map(comentario => (
                            <div key={comentario.id} className="col-md-6 col-lg-4 mb-3">
                                <div className="card p-3 h-100">
                                    <StarRating rating={comentario.rating} />
                                    <p className="mt-2 font-weight-bold">{comentario.nombre}</p>
                                    <p>{comentario.contenido}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
