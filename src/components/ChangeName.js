import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChangeName = ({ setIsLoggedIn }) => {
  const nameRef = useRef();
  const currentUser = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    try {
      const result = await fetch(
        "http://localhost:8000/auth/reset/" + currentUser.userId,
        {
          method: "POST",
          body: JSON.stringify({ name }),
          headers: {
            "Content-type": "application/json",
            Authorization: currentUser.token,
          },
        }
      );

      if (!result.ok) return alert("Algo Fallo");
      localStorage.removeItem("userId");
      window.location.reload();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Cambiar Nombre</h3>
      <form id="form" onSubmit={handleFormSubmit}>
        <section id="email-container">
          <label>Nuevo Nombre</label>
          <input ref={nameRef} type="text" id="name" />
        </section>
        <button className="submit-btn" type="submit">
          confirmar
        </button>
      </form>
    </div>
  );
};

export default ChangeName;
