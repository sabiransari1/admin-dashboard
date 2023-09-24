import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";
import { Home } from "../pages/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
  );
};
