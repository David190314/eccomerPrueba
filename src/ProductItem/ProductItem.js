import React from "react";
import "./ProductItem.css";
import checkCircle from "../assets/img/icons/checkCircle.svg";
import { EccommerceContext } from "../EcommerceContext";

export const ProductItem = ({
  description,
  type,
  brand,
  value,
  available,
  colour,
  id
}) => {
  const { addProductCar } = React.useContext(EccommerceContext);

  return (
    <section >
      <article className="product-detail--card">
        <span
          style={{ backgroundImage: `url(${checkCircle})` }}
          className="product--icon-verefy"
        ></span>
        <h2 className="product--card-title">{type}</h2>
        <div className="porduct--card-body">
          <p>
            {" "}
            <span className="product--title-intro">Descripción: </span>{" "}
            {description}
          </p>
          <p>
            {" "}
            <span className="product--title-intro">Marca: </span>
            {brand}
          </p>
          <p>
            {" "}
            <span className="product--title-intro">valor: $ </span>
            {value}
          </p>
          <p>
            {" "}
            <span className="product--title-intro">Unidades disponibles: </span>
            {available}
          </p>
          <p>
            {" "}
            <span className="product--title-intro">Color: </span>
            {colour}
          </p>
        </div>
        <button
          className="Agregar"
          onClick={(e) => addProductCar(id, type, value, brand)}
        >
          Agregar Al Carrito
        </button>
      </article>
    </section>
  );
};
