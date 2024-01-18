import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false)

  const login = () => {
    // const { email, password } = data;
    const data = { email, password };
    axios
      .post("http://localhost:8000/api/v1/auth/login", data)
      .then((res) => console.log(res));
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={login}>
        <span className="box-title">Iniciar Sesión</span>
        <div className="login-input-group">
          <label htmlFor="">Correo electronico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="">Contraseña</label>
          <div style={{position:"relative", width:"100%"}}>
            <input
            style={{width:"100%"}}
              type={showPass?"text":"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span style={{position:"absolute", right:"10px", top:"10%", cursor:"pointer"}} onClick={()=>setShowPass(!showPass)}>{showPass?"Ocultar":"Mostrar"}</span>
          </div>
        </div>
        <button onClick={login}>Iniciar sesión</button>
        <div className="singup">
          <span>¿Aún no tienes una cuenta?</span>
          <span className="text-link" onClick={() => navigate("/signup")}>
            Registrate
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
