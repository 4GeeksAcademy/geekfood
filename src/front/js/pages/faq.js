import React, { useState } from 'react';


export const faqData = () => [
  {
    question: '¿Cómo hago un pedido?',
    answer: 'Para hacer un pedido, simplemente selecciona los productos que deseas y añádelos al carrito. Luego, procede al pago y espera la entrega.'
  },
  {
    question: '¿Cómo puedo registrarme?',
    answer: 'Para registrarte en nuestra app, ve a la sección de inicio de sesión y selecciona la opción de registro. Completa los campos requeridos y listo.'
  },
  {
    question: '¿Cómo puedo ver la ubicación del repartidor?',
    answer: 'Una vez que tu pedido esté en camino, podrás ver la ubicación del repartidor en tiempo real desde la sección de seguimiento de pedidos.'
  },
  {
    question: '¿Cómo puedo realizar el pago?',
    answer: 'Ofrecemos diferentes opciones de pago, incluyendo tarjeta de crédito, débito y pago en efectivo al momento de la entrega.'
  },
  {
    question: '¿Qué productos ofrecen?',
    answer: 'Tenemos una amplia variedad de productos disponibles, incluyendo hamburguesas, pizzas, ensaladas, postres y mucho más.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = faqData();
  

  return (
    <div className="faq-container">
      <h1>Preguntas frecuentes</h1>
      <p>Encuentra respuestas a las preguntas más comunes sobre el funcionamiento de nuestra app y el proceso de pedidos.</p>
      <div className="faq-list">
        {data.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span>{item.question}</span>
              <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
      <div className="contact-section">
        <h2>¿Todavía tienes preguntas?</h2>
        <p>Contáctanos para obtener más información.</p>
        <button>Contacto</button>
      </div>
    </div>
  );
};

export default Faq;
