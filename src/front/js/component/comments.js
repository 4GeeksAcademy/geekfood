import React, { useState, useEffect } from 'react';


function Comentarios() {
    const [commentText, setCommentText] = useState("");
    const [comentarios, setComentarios] = useState([]);

    const enviarComentario = () => {
        fetch('/api/comentario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comentario: commentText })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Hubo un problema al enviar el comentario.');
        })
        .then(data => {
            console.log(data); // 
            cargarComentarios(); // Cargar los comentarios actualizados después de enviar uno nuevo
            setCommentText(""); // Limpiar el área de texto después de enviar
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Nuestras calificaciones</h5>
                        <div className="row">
                            <div className="col">
                                {/* Contenido de la primera columna */}
                                <p>Columna 1</p>
                            </div>
                            <div className="col">
                                {/* Contenido de la segunda columna */}
                                <p>Columna 2</p>
                            </div>
                            <div className="col">
                                {/* Contenido de la tercera columna */}
                                <p>Columna 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    {/* Aquí puedes agregar el área de texto para el comentario */}
                    <textarea
                        id="commentText"
                        placeholder="Escribe tu comentario aquí..."
                        rows="4"
                        cols="50"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <br />
                    <button onClick={enviarComentario} className="btn btn-primary mt-2">Enviar Comentario</button>
                </div>
            </div>
        </div>
    );
}

export default Comentarios;