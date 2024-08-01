import React from "react";
import { Link } from "react-router-dom";
import jumboimg from "../../img/home2.png";
import "../../styles/jumbotron.css";

export const Jumbotron = () => {
    return (
        <div className="jumbotron">
            {/* Imagen del jumbotron */}
            <div className="col-12">
                <div className="text-bg-dark">
                    <img src={jumboimg} className="card-img" alt="..." />
                </div>
            </div>

            {/* Jumbotron con divs alineados horizontalmente */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 mb-4 mb-md-0">
                        <div className="jumbotron-text">
                            <h1 className="display-4">¡Bienvenido a nuestra deliciosa selección de comida rápida!</h1>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="jumbotron2">
                            <p className="lead">Aquí encontrarás la mejor variedad de ofertas en nuestros restaurantes.</p>
                            <div className="d-flex justify-content-md-start justify-content-center">
                                <Link className="btn btn-secondary btn-sm me-2" to="/registro">Registrate</Link>
                                <Link className="btn btn-secondary btn-sm" to="/login">Inicia Sesión</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
