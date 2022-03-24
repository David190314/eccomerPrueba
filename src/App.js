import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EccommerceProvider } from "./EcommerceContext/index.js";
import { Home } from "./Aplication/AppHome.js";
import { Carrito } from "./Carrito/Carrito.js";


function App() {
  return (
    <EccommerceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrito" element={<Carrito />}></Route>
        </Routes>
      </BrowserRouter>
    </EccommerceProvider>
  );
}

export default App;
