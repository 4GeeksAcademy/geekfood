import React, { useState } from "react";

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
        .then(data => {
            console.log(data); 
            cargarComentarios(); // para cargar los comentarios
            setCommentText(""); // limpiar el area despues de comentar
        })
        .catch(error => console.error('Error:', error));
    };
}