import React, { useEffect, useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [validPass, setValidPass] = useState(true);
  const [confirmPass, setConfirmPass] = useState("");
  const [careers, setCareers] = useState([]);
  const [data, setData] = useState({
    alu_nombre: "",
    alu_apellido: "",
    alu_email: "",
    alu_contrasena: "",
    alu_telefono: "",
    alu_no_control: "",
    alu_carrera: "",
  });

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:8000/api/v1/careers");
      setCareers(res.data);
    })();
  }, []);

  const handleChangeValue = (e, campo) => {
    setData((prevState) => ({
      ...prevState,
      [campo]: e.target.value,
    }));
  };

  const register = (e) => {
    e.preventDefault();
    const validPass = confirmPass === data.alu_contrasena;
    if (validPass) {
      if(!data.alu_carrera) return alert("Debes seleccionar una carrera")
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (emailRegex.test(data.alu_email)) {
        axios.post("http://localhost:8000/api/v1/auth/register",data).then(res=>{
          console.log(res.data)
          alert("Tu usuario se creó exitosamente")
          navigate("/login")
        }).catch(()=>alert("algo salió mal, por favor verifica tu información y vuelve a intentarlo"))
      }else{
        alert("El correo ingresado no es valido")
      }
    } else {
      setValidPass(validPass);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={register}>
        <span className="box-title">Registrate</span>
        <div className="signup-input-group">
          <label htmlFor="">Nombre(s)</label>
          <input
            type="text"
            value={data.alu_nombre}
            onChange={(e) => handleChangeValue(e, "alu_nombre")}
            required
          />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Apellido(s)</label>
          <input
            type="text"
            value={data.alu_apellido}
            onChange={(e) => handleChangeValue(e, "alu_apellido")}
            required
          />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Número de control</label>
          <input
            type="text"
            value={data.alu_no_control}
            onChange={(e) => {
              const inputValue = e.target.value;
              const regex = /^[0-9]*$/;
              if (
                (regex.test(inputValue) && inputValue.length <= 8) ||
                inputValue === ""
              ) {
                handleChangeValue(e, "alu_no_control");
              }
            }}
            required
          />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">carrera</label>
          {/* <input
            type="text"
            value={data.alu_carrera}
            onChange={(e) => dhanleChangeValue(e, "alu_carrera")}
            required
          /> */}
          <select
            name=""
            id=""
            onChange={(e) => handleChangeValue(e, "alu_carrera")}
          >
            <option value="">Selecciona una carrera</option>
            {careers.map((carr) => (
              <option value={carr.carr_id} key={carr.carr_id}>
                {carr.carr_nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={data.alu_email}
            onChange={(e) => handleChangeValue(e, "alu_email")}
            required
          />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Teléfono</label>
          <input
            type="text"
            value={data.alu_telefono}
            onChange={(e) => {
              const inputValue = e.target.value;
              const regex = /^[0-9]*$/;
              if (
                (regex.test(inputValue) && inputValue.length <= 10) ||
                inputValue === ""
              ) {
                handleChangeValue(e, "alu_telefono");
              }
            }}
            required
          />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            value={data.alu_contrasena}
            onChange={(e) => handleChangeValue(e, "alu_contrasena")}
            required
          />
        </div>
        <div className="signup-input-group">
          <label htmlFor="">Confirmar contraseña</label>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            onBlur={(e) => {
              const valid = data.alu_contrasena === e.target.value;
              setValidPass(valid);
            }}
            required
            className={!validPass ? "incorrect" : ""}
          />
          <span className={validPass ? "hide" : "error-text"}>
            Las contraseñas no coinciden
          </span>
        </div>
        <button>Registrarme</button>
        <div className="login">
          <span>¿Ya tienes una cuenta?{"  "}</span>
          <span className="text-link" onClick={() => navigate("/login")}>
            Iniciar sesión
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
