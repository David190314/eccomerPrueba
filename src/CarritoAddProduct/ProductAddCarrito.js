import React from "react";
import { EccommerceContext } from "../EcommerceContext";
import checkCircle from "../assets/img/icons/checkCircle.svg";
import "./ProductAddCarrito.css";

export const ProductInCar = () => {
  const { productAdd } = React.useContext(EccommerceContext);

  return (
    <section className="main-car-detail" >
      {productAdd.map((element) => (
        <article key={element.id} className="product-compra--card">
          <span
            style={{ backgroundImage: `url(${checkCircle})` }}
            className="product--icon-verefy"
          ></span>
          <h2 className="product--compra-title">{element.tipo}</h2>
          <div className="porduct-compra--card-body">
            <p>
              <span className="product--title-intro">Marca: </span>
              {element.brand}
            </p>
            <p>
              <span className="product--title-intro">Valor: </span>
              {element.value}
            </p>
            <p>
              <span className="product--title-intro">cantidad: </span>
              {element.cantidad}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
