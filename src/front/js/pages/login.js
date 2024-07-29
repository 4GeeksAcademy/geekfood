import React from "react";
import imgLogin from "../../img/login.png";
import "../../styles/login.css";


export const Login = () => {
	return (
		<div className="container-fluid p-0 mb-1">
			<div className="row no-gutters">
				{/* Formulario de Login */}
				<div className="form-login col-md-6 d-flex align-items-center justify-content-center">
					<form className="w-75">
						<h3 className="text-center mb-4">Acceder</h3>
						<p className="text-center mb-4">Bienvenido a nuestro portal para acceder a tu cuenta</p>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">Password <a className="text" href="/resetPassword">Olvidaste tu contraseña?</a></label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
							<div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
						</div>
						<div className="mb-3">
							<button type="submit" className="btn btn-secondary w-100" href="/login">Acceder</button>
						</div>
						<div className="mb-3">
							<button type="submit" className="btn btn-secondary w-100" href="/registro">Accede con Google</button>
						</div>
						<div className="text-center">
							<a className="text" href="/registro">¿No tienes una cuenta? ¡Regístrate aquí!</a>
						</div>
					</form>
				</div>
				{/* Imagen */}
				<div className="img-login col-md-6 d-flex align-items-center justify-content-center">
					<img src={imgLogin} alt="Login" className="img-fluid" />
				</div>
			</div>
		</div>
	);
};
