import React from "react";
import "../../styles/login.css";

export const FPassword = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center">
            {/* Formulario de Reseteo Password */}
            <div className="form-login col-md-6 d-flex align-items-center justify-content-center">
                <form className="w-100">
                    <h3 className="text-center mb-4">Reestablece tu Contraseña</h3>
                    <p className="text-center mb-4">Ingresa tu correo electronico, y si esta en nuestra base de datos te enviaremos un mail con un enlace para que puedas reestablecer tu contraseña.</p>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu correo electronico" />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-secondary w-100">Enviar enlace</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
