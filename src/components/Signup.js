import React from "react";

const Signup = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Registrarse</h3>
      <form id="form">
        <section id="email-container">
          <label>Nombre</label>
          <input type="text" id="name" />
        </section>
        <section id="email-container">
          <label>Email</label>
          <input type="email" id="email" />
        </section>
        <section id="password-container">
          <label>Contraseña</label>
          <input type="password" id="password" />
        </section>
        <button id="signup-btn" className="submit-btn" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Signup;
