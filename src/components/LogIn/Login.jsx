import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <span className="box-title">Iniciar Sesión</span>
        <div className="login-input-group">
          <label htmlFor="">Correo electronico</label>
          <input type="text" />
        </div>
        <div className="login-input-group">
          <label htmlFor="">Contraseña</label>
          <input type="text" />
        </div>
          <button>Iniciar sesión</button>
        <div className="singup">
          <span>¿Aún no tienes una cuenta?</span>
          <span className="text-link">Registrate</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
