import React, { useRef } from "react";

const Signup = ({ changeUserState }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleformSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (password.length < 5 || name.length < 3)
      return alert("Llene correctamente los datos");

    try {
      await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      changeUserState(false);
    } catch (err) {
      alert("registration failed");
    }
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Registrarse</h3>
      <form id="form" onSubmit={handleformSubmit}>
        <section id="email-container">
          <label>Nombre</label>
          <input ref={nameRef} type="text" id="name" required />
        </section>
        <section id="email-container">
          <label>Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </section>
        <section id="password-container">
          <label>Contraseña</label>
          <input ref={passwordRef} type="password" id="password" required />
        </section>
        <button id="signup-btn" className="submit-btn" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Signup;
