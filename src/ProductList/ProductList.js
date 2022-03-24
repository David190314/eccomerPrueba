import React from "react";
import { EccommerceContext } from "../EcommerceContext";
import { ProductItem } from "../ProductItem/ProductItem";
import './ProductList.css'

export const ProductList = () => {
  const { product } = React.useContext(EccommerceContext);
  return (
    <section className="main-product-detail">
      <div className="product-detail-title">
        <h2>Nuestros Productos están verificados</h2>
        <p>Tenemos Aliados que ofrecen los mejores precios</p>
      </div>
      <React.Fragment>
        {product.map((element) => (
          <ProductItem key={element.id} {...element} />
        ))}
      </React.Fragment>
    </section>
  );
};
