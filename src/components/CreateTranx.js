import { useRef, useState, useEffect } from "react";
import React from "react";

const CreateTranx = ({ setIsLoggedIn }) => {
  const currentUser = JSON.parse(localStorage.getItem("userId"));
  const [movs, setMove] = useState([]);

  useEffect(() => {
    setIsLoggedIn(true);
    const userInfo = JSON.parse(localStorage.getItem("userId"));
    fetch("http://localhost:8000/tranx/getAll/" + userInfo.userId, {
      headers: {
        Authorization: userInfo.token,
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setMove(data.trx);
      })
      .catch((err) => {
        alert("Algo salio mal!");
      });
  }, []);

  const calculateBalance = () => {
    return movs.reduce((saldo, transaccion) => {
      if (transaccion.type === "Ingreso") {
        return saldo + transaccion.amount;
      } else if (transaccion.type === "Gasto") {
        return saldo - transaccion.amount;
      }
      return saldo;
    }, 0);
  };

  const descRef = useRef();
  const amountRef = useRef();
  const typeRef = useRef();
  const dateRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const desc = descRef.current.value;
    const amount = amountRef.current.value;
    const type = typeRef.current.value;
    const date = dateRef.current.value;

    try {
      const result = await fetch("http://localhost:8000/tranx/create", {
        method: "POST",
        body: JSON.stringify({
          desc,
          amount,
          type,
          date,
          userId: currentUser.userId,
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: currentUser.token,
        },
      });

      if (!result.ok) return alert("Algo salio mal!");
      window.location.reload();
    } catch (err) {
      alert("Algo salio mal!");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Crear Transaccion</h2>
      <h3 id="name">{`Hola, ${currentUser.name}`}</h3>
      <p className="budget">Saldo Actual: ${calculateBalance()}</p>
      <form id="form" onSubmit={handleFormSubmit}>
        <section className="form-input-container">
          <label>Descripcion</label>
          <input ref={descRef} type="text" id="description" required />
        </section>
        <section className="form-input-container">
          <label>Monto</label>
          <input ref={amountRef} type="number" id="amount" min="1" />
        </section>
        <section className="form-input-container">
          <label>Tipo</label>
          <select ref={typeRef} id="type">
            <option>Ingreso</option>
            <option>Gasto</option>
          </select>
        </section>
        <section className="form-input-container">
          <label>Fecha</label>
          <input ref={dateRef} type="date" id="date" required />
        </section>
        <button className="submit-btn" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateTranx;
