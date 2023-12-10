import React from "react";

const Header = ({ changeUserState, isNew }) => {
  return (
    <header>
      <nav>
        <div>
          <h2 className="logo">Adma Traker</h2>
        </div>
        <ul className="navbar-list">
          {isNew ? (
            <li onClick={() => changeUserState(false)}>Iniciar Sesión</li>
          ) : (
            <li onClick={() => changeUserState(true)}>Registrarse</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
