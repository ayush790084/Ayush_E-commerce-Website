import React from "react";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Shop from "./component/shop";
import { Navigate, Route, Routes } from "react-router";
import Contact from "./component/contact";
import About from "./component/about";
import ProductDetail from "./component/productdeatil";

import Cart from "./component/cart";
import Checkout from "./checkout";
import NotFound from "./component/notfound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};

export default App;
