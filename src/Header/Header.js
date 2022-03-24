import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="menuNav">
          <Link to={"Carrito"}>
            <h3> Carrito </h3>
          </Link>
          <Link to={"Ventas"}>
            <h3> Ventas </h3>
          </Link>
        </div>
        <div className="header--title-container">
          <h1>E-Commerce Allianz</h1>
          <p>La Próxima Revolucíon del E-Commerce</p>
        </div>
      </nav>
    </header>
  );
};
