import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import icon from "../../img/GEEK2.png";
import { FaShoppingCart } from 'react-icons/fa';

export const Navbar = ({ cart }) => {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="/"><img src={icon} alt="icon" className="navbar-icon" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Servicios</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Americana</a></li>
                                <li><a className="dropdown-item" href="#">China</a></li>
                                <li><a className="dropdown-item" href="#">Coreana</a></li>
                                <li><a className="dropdown-item" href="#">Española</a></li>
                                <li><a className="dropdown-item" href="#">India</a></li>
                                <li><a className="dropdown-item" href="#">Italiana</a></li>
                                <li><a className="dropdown-item" href="#">Japonesa</a></li>
                                <li><a className="dropdown-item" href="#">Mexicana</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Contactanos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/faq">FAQ's</Link>
                        </li>
                    </ul>
                    <div className="d-flex me-2">
                        <Link className="btn btn-outline-secondary btn-sm" to="/registro">Registrate</Link>
                    </div>
                    <div className="d-flex me-2">
                        <Link className="btn btn-outline-secondary btn-sm" to="/login">Inicia Sesión</Link>
                    </div>
                    <div className="navbar-cart d-flex">
                        <Link to="/resumebuy" className="btn btn-outline-secondary btn-sm">
                            <FaShoppingCart />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
