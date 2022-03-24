import React from "react";
import './Search.css'

export const ProductSearch = () => {
//   const { searchValue, setSearchValue } = React.useContext();
//   const onSearchValueChange = (e) => {
//     setSearchValue(e.target.value);
//   };
  return (
    <input
      className="TodoSearch"
      placeholder="Vehiculo"
    //   value={searchValue}
    //   onChange={onSearchValueChange}
    />
  );
};
