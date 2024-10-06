import React from "react";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist"
import Login from "./pages/Login";

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
  );
};

export default App;
