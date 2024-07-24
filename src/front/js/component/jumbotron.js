import React from "react";
import { Link } from "react-router-dom";
import jumboimg from "../../img/image.png";
import "../../styles/home.css"; // Asegúrate de importar tu archivo CSS personalizado

export const Jumbotron = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Imagen del jumbotron */}
                <div className="col-md-12">
                    <div className="text-bg-dark">
                        <img src={jumboimg} className="card-img" alt="..." />
                    </div>
                </div>

                {/* Jumbotron con divs alineados horizontalmente */}
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="jumbotron">
                                <h1 className="display-4">¡Bienvenido a nuestra deliciosa selección de comida rápida!</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="jumbotron2">
                                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                <div className="d-flex">
                                    <Link className="btn btn-secondary btn-sm me-2" to="/registro">Registrate</Link>
                                    <Link className="btn btn-secondary btn-sm" to="/login">Inicia Sesión</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
