import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className="signup-container">
      <div className="signup-box">
        <span className="box-title">Registrate</span>
        <div className="signup-input-group">
          <label htmlFor="">Nombre(s)</label>
          <input type="text" />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Apellido(s)</label>
          <input type="text" />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Número de control</label>
          <input type="text" />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Teléfono</label>
          <input type="text" />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Contraseña</label>
          <input type="text" />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Confirmar contraseña</label>
          <input type="text" />
        </div>
        <button>Registrarme</button>
        <div className="login">
          <span>¿Ya tienes una cuenta?{"  "}</span>
          <span className="text-link" onClick={()=> navigate("/login")}>Iniciar sesión</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
