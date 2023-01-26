import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUserView from "./Pages/AddUserView";
import AdminView from "./Pages/AdminView";
import CartView from "./Pages/CartView";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductDetailed from "./Pages/ProductDetailed";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products/:id" element={<ProductDetailed />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/addUser" element={<AddUserView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
