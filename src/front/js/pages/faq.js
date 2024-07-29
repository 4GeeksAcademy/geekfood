import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/faq.css";

export const faqData = () => [
  {
    question: '¿Cómo puedo registrarme?',
    answer: 'Para registrarte ve a la sección de inicio de sesión y selecciona la opción de registro completa los campos requeridos y listo. También puedes descargar nuestra aplicación en tu dispositivo móvil (iOS o Android) y seguir los sencillos pasos de creación de cuenta allí.'
  },
  {
    question: '¿Cómo puedo realizar un pedido?',
    answer: 'Realizar un pedido es muy sencillo. Una vez registrado, busca tu tipo de comida de preferencia o restaurante, selecciona las opciones que deseas y agrégalos a tu carrito. A continuación, elige una dirección de entrega y confirma tu pedido.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos una variedad de métodos de pago, incluyendo tarjetas de crédito y débito (Visa, Mastercard, American Express), y, efectivo a la entrega. Puedes seleccionar tu método de pago preferido al momento de realizar tu pedido. '
  },
  {
    question: '¿Cuál es el tiempo estimado de entrega?',
    answer: 'El tiempo de entrega puede variar dependiendo de varios factores, como la distancia, la demanda y la disponibilidad del restaurante. Sin embargo, te proporcionaremos una estimación del tiempo de entrega al momento de realizar tu pedido.'
  },
  {
    question: '¿Qué pasa si mi pedido llega tarde o está equivocado?',
    answer: 'Entendemos que la puntualidad y la precisión de los pedidos son importantes para nuestros usuarios. Si tu pedido llega tarde o está equivocado, por favor contáctanos a través de nuestra aplicación o nuestros medios de atención al cliente. Haremos todo lo posible para solucionar el problema lo antes posible y ofrecerte una solución satisfactoria.'
  },
  {
    question: '¿Cómo puedo dar seguimiento a mi pedido?',
    answer: 'Podrás seguir el estado de tu pedido en tiempo real a través de nuestra aplicación. Recibirás notificaciones sobre los cambios de estado de tu pedido, desde que se realiza hasta que se entrega.'
  },
  {
    question: '¿Cómo puedo cancelar un pedido?',
    answer: 'Puedes cancelar tu pedido en cualquier momento antes de que sea entregado. Para cancelar un pedido, simplemente busca el pedido en cuestión y selecciona la opción de cancelar.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    navigate('/contactUs');
  };

  const data = faqData();

  return (
    <div className="faq-container">
      <h1>Preguntas frecuentes</h1>
      <p>Encuentra respuestas a las preguntas más comunes sobre el funcionamiento de nuestra plataforma y el proceso de pedidos.</p>
      <div className="faq-list">
        {data.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span>{item.question}</span>
              <span className="arrow" style={{ fontSize: '1.5em' }}>
                {openIndex === index ? <i className="bi bi-caret-up"></i> : <i className="bi bi-caret-down"></i>}
              </span>
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
      <div className="contact-section">
        <h2>¿Todavía tienes preguntas?</h2>
        <p>Contáctanos para obtener más información.</p>
        <button className="btn btn-secondary">Contacto</button>
        <button onClick={handleContactClick}>Contacto</button>
      </div>
    </div>
  );
};

export default Faq;
