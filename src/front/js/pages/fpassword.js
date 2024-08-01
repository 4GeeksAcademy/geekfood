import React, { useState } from "react";
import "../../styles/fpassword.css";
import backgroundImage from "../../img/password.png";

export const FPassword = () => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!email) {
            formErrors.email = "El campo de correo electrónico es obligatorio";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "La dirección de correo electrónico no es válida";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Formulario válido, procesando envío de enlace...");
        }
    };

    return (
        <div className="f-container d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Formulario de Reseteo Password */}
            <div className="form-login col-md-6 d-flex align-items-center justify-content-center">
                <form className="w-100" onSubmit={handleSubmit}>
                    <h3 className="text-center mb-4">Reestablece tu Contraseña</h3>
                    <p className="text-center mb-4">
                        Ingresa tu correo electrónico, y si está en nuestra base de datos te enviaremos un mail con un enlace para que puedas reestablecer tu contraseña.
                    </p>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Ingresa tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-secondary w-100">Enviar enlace</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
