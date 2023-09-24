import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
  );
};
