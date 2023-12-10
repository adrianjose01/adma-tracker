import React from "react";

const Login = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Iniciar sesión</h3>
      <form id="form">
        <section id="email-container">
          <label>Email</label>
          <input type="email" id="email" />
        </section>
        <section id="password-container">
          <label>Contraseña</label>
          <input type="password" id="password" />
        </section>
        <button id="login-btn" className="submit-btn" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
