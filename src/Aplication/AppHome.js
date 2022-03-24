import React from "react";
import { NavBar } from "../Header/Header";
import { ProductSearch } from "../ProductSearch/Search";
import { ProductList } from "../ProductList/ProductList";
import { Footer } from '../Footer/Footer.js'

export const Home = () => {
    return (
        <React.Fragment>
            <NavBar />
            <ProductSearch />
            <ProductList />
            <Footer />
        </React.Fragment>
    );
}
 
