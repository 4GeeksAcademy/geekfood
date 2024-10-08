// src/component/Navbar.js
import React, { useContext, useEffect } from 'react';
import "../../styles/navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import icon from "../../img/GEEK2.png";
import { FaShoppingCart } from 'react-icons/fa';
import { Context } from '../store/appContext';

export const Navbar = ({ cart }) => {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        if (store.currentUser === null) navigate('/')
    }, [store.currentUser]);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg mb-0">
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
                            <Link className="nav-link active" aria-current="page" to="/whyus">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/product_americano">Productos</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contactanos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/faq">FAQ's</Link>
                        </li>
                    </ul>
                    {
                        !!store.currentUser ? (
                            <>
                                <div className="d-flex me-2">
                                    <div className="dropdown">
                                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {store.currentUser?.email}
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/userProfile">Perfil</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button className="dropdown-item" onClick={actions.logout}>Salir</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="d-flex me-2">
                                    <Link className="btn btn-outline-secondary btn-sm" to="/registro">Registrate</Link>
                                </div>
                                <div className="d-flex me-2">
                                    <Link className="btn btn-outline-secondary btn-sm" to="/login">Inicia Sesión</Link>
                                </div>
                            </>
                        )
                    }
                    <div className="navbar-cart d-flex">
                        <Link to="/resumebuy" className="btn btn-outline-secondary btn-sm">
                            <FaShoppingCart />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </Link>
                    </div>
                </div>
            </nav >
        </div>
    );
};
