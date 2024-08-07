// src/front/js/components/Chatbot.js

import React, { useState } from 'react';
import '../../styles/chatbot.css';


export const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = () => {
        if (!userInput.trim()) return;

        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);

        let botResponse = 'Lo siento, no entiendo tu pregunta.';

        if (userInput.toLowerCase() === 'hola') {
            botResponse = 'Hola, en qué te puedo ayudar?';
        } else if (userInput.toLowerCase() === 'que me puedes recomendar?') {
            botResponse = `Tenemos los mejores platos y restaurantes. Tenemos comida Americana, China, Coreana, Española, India, Italiana, Japonesa y Mexicana. Disfruta de los mejores productos en el siguiente enlace: <a href="/product_americano" rel="noopener noreferrer">Ver productos </a>`;
        } 

        setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
        setUserInput('');
    };

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="chat-icon-button" onClick={toggleChatbot}>
                <i className="fas fa-comment-alt"></i>
            </button>
            {isOpen && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        GEEKFOOD IA
                        <button className="chatbot-close-button" onClick={toggleChatbot}>
                            ×
                        </button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chatbot-message ${msg.sender}`}
                                dangerouslySetInnerHTML={{ __html: msg.text }}
                            />
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Escribe tu mensaje..."
                        />
                        <button onClick={handleSend}>Enviar</button>
                    </div>
                </div>
            )}
        </div>
    );
};





        /* const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);

        try {
            // Simulamos una llamada a una API de IA para obtener la respuesta
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userInput }),
            });

            const data = await response.json();

            setMessages([...newMessages, { sender: 'bot', text: data.response }]);
        } catch (error) {
            setMessages([...newMessages, { sender: 'bot', text: 'Hola, en que te puedo ayudar.' }]);
        }
        

        setUserInput('');
    };

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="chat-icon-button" onClick={toggleChatbot}>
                <i className="fas fa-comment-alt"></i>
            </button>
            {isOpen && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        GEEKFOOD IA
                        <button className="chatbot-close-button" onClick={toggleChatbot}>
                            ×
                        </button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chatbot-message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Escribe tu mensaje..."
                        />
                        <button onClick={handleSend}>Enviar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

 */