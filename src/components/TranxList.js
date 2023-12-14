import React, { useEffect, useState } from "react";

const TranxList = () => {
  const [movs, setMove] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("userId"));
    fetch("http://localhost:8000/tranx/getAll/" + currentUser.userId, {
      headers: {
        Authorization: currentUser.token,
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

  const handleDelete = async () => {
    const currentUser = JSON.parse(localStorage.getItem("userId"));
    try {
      const result = await fetch(
        "http://localhost:8000/tranx/delete/" + currentUser.userId,
        {
          method: "DELETE",
          headers: {
            Authorization: currentUser.token,
          },
        }
      );
      if (!result.ok) return alert("algo salio mal!");
      window.location.reload();
    } catch (err) {
      alert("Algo salio mal!");
    }
  };

  return (
    <div className="list-container">
      <h3 className="list-title">My Movements</h3>
      <div className="tranx-container">
        <div className="filter-container">
          <button onClick={handleDelete} className="submit-btn red">
            Delete All
          </button>
        </div>
        {movs &&
          movs.map((m) => (
            <article
              key={m._id}
              className={`tranx ${m.type === "Ingreso" ? "green" : "red"}`}
            >
              <p>{m.description}</p>
              <section>
                <p>{`$${m.amount}`}</p>
              </section>
            </article>
          ))}
      </div>
    </div>
  );
};

export default TranxList;
