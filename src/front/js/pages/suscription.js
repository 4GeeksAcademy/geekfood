import React from 'react';


export const Suscription = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h1 className="mb-4">¡Gracias por Suscribirte a Food Geeks!</h1>
                <p className="lead">
                    ¡Bienvenido a la familia Food Geeks! 🎉
                </p>
                <p className="mb-4">
                    Te has suscrito exitosamente para recibir nuestras ofertas exclusivas y actualizaciones de promociones. Aquí está lo que puedes esperar:
                </p>
                <ul className="list-unstyled mb-4">
                    <li><strong>Ofertas Especiales:</strong> Disfruta de descuentos y promociones especiales solo para nuestros suscriptores.</li>
                    <li><strong>Nuevos Menús:</strong> Sé el primero en descubrir nuestras nuevas incorporaciones al menú y platos exclusivos.</li>
                    <li><strong>Eventos y Sorteos:</strong> Participa en eventos especiales y sorteos para ganar premios deliciosos.</li>
                </ul>
                <p className="mb-4">
                    Mantente atento a tu correo electrónico para no perderte ninguna oferta. Si alguna vez necesitas actualizar tus preferencias o darte de baja, siempre puedes hacerlo desde la sección de tu cuenta en nuestro sitio web.
                </p>
                <p>
                    ¡Gracias por elegir Food Geeks para tus momentos de comida! 🍔🍕🥗
                </p>
                <p className="mt-4">
                    ¡Nos vemos en tu próxima comida!
                </p>
                <a href="/" className="btn btn-primary">Volver a inicio</a>
            </div>
        </div>       
    );
};