import React from "react";
import { getProduct } from "../Actions/productAction.js";

const EccommerceContext = React.createContext();

function EccommerceProvider(props) {
  const [product, setProduct] = React.useState([]);
  const [productAdd, setProductAdd] = React.useState([]);

  const addProductCar = (id, type, value, brand) => {
    if (productAdd.length === 0) {
      setProductAdd([
        {
          id: id,
          tipo: type,
          value: value,
          brand: brand,
          cantidad: 1
        }
      ]);
    } else {
      const newProductAdd = [...productAdd];

      const productInCarrito =
        newProductAdd.filter((element) => {
          return element.id === id;
        }).length > 0;
      if (productInCarrito) {
        newProductAdd.forEach((element, index) => {
          if (element.id === id) {
            const newCantidad = newProductAdd[index].cantidad;
            newProductAdd[index] = {
              id: id,
              tipo: type,
              value: value,
              brand: brand,
              cantidad: newCantidad + 1
            };
          }
        });
      } else {
        newProductAdd.push({
          id: id,
          tipo: type,
          value: value,
          brand: brand,
          cantidad: 1
        });
      }
      setProductAdd(newProductAdd)
    }
  };

  React.useEffect(() => {
    getProduct().then((response) => {
      const { data } = response;
      setProduct(data);
    });
  }, []);

  return (
    <EccommerceContext.Provider
      value={{
        product,
        productAdd,
        setProductAdd,
        addProductCar
      }}
    >
      {props.children}
    </EccommerceContext.Provider>
  );
}

export { EccommerceContext, EccommerceProvider };
