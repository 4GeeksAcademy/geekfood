import React from "react";
import { Link } from "react-router-dom";

export const Registro = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">Logo</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="/">Inicio</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Nosotros</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Servicios</a>
						</li>

						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Productos
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Americana</a></li>
								<li><a class="dropdown-item" href="#">China</a></li>
								<li><a class="dropdown-item" href="#">Coreana</a></li>
								<li><a class="dropdown-item" href="#">Española</a></li>
								<li><a class="dropdown-item" href="#">India</a></li>
								<li><a class="dropdown-item" href="#">Italiana</a></li>
								<li><a class="dropdown-item" href="#">Japonesa</a></li>
								<li><a class="dropdown-item" href="#">Mexicana</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Contactanos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Preguntas Frecuentes</a>
						</li>
					</ul>
					<button class="btn btn-outline-primary" type="submit">Ingresar</button>
					<button class="btn btn-outline-primary" type="submit">Registrate</button>
				</div>
			</div>
		</nav>
	);
};
