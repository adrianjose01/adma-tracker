import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ changeUserState, isNew, isLoggedIn, setLogOut }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userId");
    setLogOut(false);
  };

  return (
    <header>
      <nav>
        <div>
          <h2 className="logo" onClick={() => navigate("/dashboard")}>
            Adma Traker
          </h2>
        </div>
        {!isLoggedIn && (
          <ul className="navbar-list">
            {isNew ? (
              <li onClick={() => changeUserState(false)}>Iniciar Sesión</li>
            ) : (
              <li onClick={() => changeUserState(true)}>Registrarse</li>
            )}
          </ul>
        )}
        {isLoggedIn && (
          <ul className="navbar-list">
            <li onClick={() => navigate("/reset")}>Reset Name</li>
            <li onClick={logoutHandler}>Logout</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
