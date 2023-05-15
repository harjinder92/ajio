import React from "react";
import Navbar from "./Component/Navbar";
import "./App.css";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Offers from "./Component/Offers";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </>
  );
}
export default App;
