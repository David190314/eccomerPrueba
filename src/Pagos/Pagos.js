import React, { useEffect } from "react";
import { EccommerceContext } from "../EcommerceContext";
import { Link } from "react-router-dom";
import "./Pagos.css";

export const Pagos = () => {
  const { productAdd } = React.useContext(EccommerceContext);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    productAdd.forEach((element) =>
      setTotal((prev) => (prev += element.value * element.cantidad))
    );
  }, [productAdd]);
  return (
    <section className="main-contaner-detail--Pagos">
      <article className="pagos-detail">
        <h2>Total a Pagar $: {total}</h2>
      </article>
      <div className="container--button-redirect">
        <Link to={"/"} className="button-redirect--products">
          <h3>Ir a Productos</h3>
        </Link>
      </div>
    </section>
  );
};
