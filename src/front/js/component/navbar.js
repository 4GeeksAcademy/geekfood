// src/component/Navbar.js
import React from 'react';
import "../../styles/navbar.css";
import { Link } from 'react-router-dom';
import icon from "../../img/GEEK2.png";


export const Navbar = () => {
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
							<Link className="nav-link active" aria-current="page" to="/whyus">Nosotros</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/product">Productos</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/contactUs">Contactanos</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/faq">FAQ's</Link>
						</li>
						<div className="d-flex">
						</div>
					</ul>
					<div className="d-flex me-2">
						<Link className="btn btn-outline-secondary btn-sm" to="/registro">Registrate</Link>
					</div>
					<div className="d-flex">
						<Link className="btn btn-outline-secondary btn-sm" to="/login">Inicia Sesión</Link>
					</div>

				</div>
			</div>
		</nav>
	);
};
