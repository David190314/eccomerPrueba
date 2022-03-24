import React from "react";
import { ProductInCar } from "../CarritoAddProduct/ProductAddCarrito";
import { EccommerceContext } from "../EcommerceContext";
import { Pagos } from "../Pagos/Pagos";
import { FooterCompras } from "../Footer/FooterCompras.js";
import "./Carrito.css";

export const Carrito = () => {
  const { productAdd } = React.useContext(EccommerceContext);

  return (
    <React.Fragment>
      <section className="container-carrito">
        <div className="header-container--carrito-title">
          <h2>Tus Compras</h2>
          {productAdd.length === 0 ? (
            <p>Aun no has agregado nada al carrito</p>
          ) : (
            <p>Detalle de tus Compras</p>
          )}
        </div>
      </section>
      <ProductInCar />
      <Pagos />
      <FooterCompras />
    </React.Fragment>
  );
};
