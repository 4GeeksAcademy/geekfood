import React, { useState } from "react";
import imgLogin from "../../img/register.png";
import "../../styles/login.css";

export const Registro = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		let formErrors = {};
		let isValid = true;

		// Validar el campo de nombre
		if (!name) {
			formErrors.name = "El campo de nombres es obligatorio";
			isValid = false;
		}

		// Validar el campo de email
		if (!email) {
			formErrors.email = "El campo de email es obligatorio";
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			formErrors.email = "La dirección de email no es válida";
			isValid = false;
		}

		// Validar el campo de password
		if (!password) {
			formErrors.password = "El campo de contraseña es obligatorio";
			isValid = false;
		} else if (password.length < 6) {
			formErrors.password = "La contraseña debe tener al menos 6 caracteres";
			isValid = false;
		}

		setErrors(formErrors);
		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			// Procesar el registro
			console.log("Formulario válido, procesando registro...");
		}
	};

	return (
		<div className="container-fluid p-5 mb-1">
			<div className="row no-gutters">

				{/* Imagen */}
				<div className="img-login col-md-6 d-flex align-items-center justify-content-center">
					<div id="carouselExampleDark" className="carousel carousel-dark slide">
						<div className="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active" data-bs-interval="1000">
								<img src={imgLogin} className="d-block w-100" alt="..." />
							</div>
							<div className="carousel-item" data-bs-interval="1000">
								<img src={imgLogin} className="d-block w-100" alt="..." />
							</div>
							<div className="carousel-item">
								<img src={imgLogin} className="d-block w-100" alt="..." />
							</div>
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>

				{/* Formulario de Registro */}
				<div className="form-login col-md-6 d-flex align-items-center justify-content-center">
					<form className="w-75" onSubmit={handleSubmit}>
						<h3 className="text-center mb-4">Regístrate</h3>
						<p className="text-center mb-4">Bienvenido a nuestro portal para obtener una nueva cuenta</p>
						<div className="mb-3">
							<label htmlFor="exampleInputName1" className="form-label">Nombres</label>
							<input
								type="text"
								className="form-control"
								id="exampleInputName1"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							{errors.name && <div className="text-danger">{errors.name}</div>}
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">Correo Eléctronico</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div id="emailHelp" className="form-text">Nunca compartiremos tu email.</div>
							{errors.email && <div className="text-danger">{errors.email}</div>}
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">
								Contraseña <a className="text" href="/resetPassword">¿Olvidaste tu contraseña?</a>
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div id="emailHelp" className="form-text">Nunca compartiremos tu contraseña.</div>
							{errors.password && <div className="text-danger">{errors.password}</div>}
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">
								Confirmar Contraseña <a className="text" href="/resetPassword">¿Olvidaste tu contraseña?</a>
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div id="emailHelp" className="form-text">Nunca compartiremos tu contraseña.</div>
							{errors.password && <div className="text-danger">{errors.password}</div>}
						</div>
						<div className="mb-3">
							<button type="submit" className="btn btn-secondary w-100">Registrarse</button>
						</div>
						<div className="mb-3">
							<button type="button" className="btn btn-secondary w-100" onClick={() => window.location.href = '/registro'}>Regístrate con Google</button>
						</div>
						<div className="text-center">
							<a className="text" href="/login">¿Ya tienes una cuenta? Inicia sesión aquí!</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
