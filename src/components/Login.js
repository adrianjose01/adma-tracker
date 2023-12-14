import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const result = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify({ password, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) return alert("Login Failed");
      const data = await result.json();
      localStorage.setItem("userId", JSON.stringify(data));
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (err) {
      alert("login failed");
    }
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Iniciar sesión</h3>
      <form id="form" onSubmit={handleFormSubmit}>
        <section id="email-container">
          <label>Email</label>
          <input ref={emailRef} type="email" id="email" />
        </section>
        <section id="password-container">
          <label>Contraseña</label>
          <input ref={passwordRef} type="password" id="password" />
        </section>
        <button id="login-btn" className="submit-btn" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
