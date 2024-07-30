import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faStar, faClock, faMapMarkedAlt, faTags, faHeadset, faComments } from '@fortawesome/free-solid-svg-icons';

export const Whyus = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2>¿Por qué escogernos?</h2>
                <p>Nuestra característica principal es la rapidez de entrega. Obtén tus alimentos favoritos en tiempo récord y disfruta de una experiencia sin igual.</p>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="text-center">
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faCheckCircle} size="3x" />
                        </div>
                        <p className="fw-bold">Entrega rápida</p>
                        <p>Sin esperas largas</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center">
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faStar} size="3x" />
                        </div>
                        <p className="fw-bold">Calidad garantizada</p>
                        <p>Ingredientes frescos y sabrosos</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center">
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faClock} size="3x" />
                        </div>
                        <p className="fw-bold">Variedad de Opciones</p>
                        <p>Amplia gama de restaurantes y tipos de comida</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center">
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />
                        </div>
                        <p className="fw-bold">Seguimiento en Tiempo Real</p>
                        <p>Rastrea tu pedido desde la cocina hasta tu puerta</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center">
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faTags} size="3x" />
                        </div>
                        <p className="fw-bold">Ofertas y Descuentos</p>
                        <p>Aprovecha promociones exclusivas</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center">
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faHeadset} size="3x" />
                        </div>
                        <p className="fw-bold">Atención al Cliente</p>
                        <p>Soporte dedicado para resolver cualquier problema</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center">
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faComments} size="3x" />
                        </div>
                        <p className="fw-bold">Opiniones y Reseñas</p>
                        <p>Lee lo que dicen otros clientes y haz tu elección informada</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <img src="https://via.placeholder.com/300" alt="App placeholder" className="img-fluid" />
            </div>
        </div>
    );
};
