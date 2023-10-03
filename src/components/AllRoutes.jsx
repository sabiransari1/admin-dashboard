import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Stats } from "../pages/Stats";
import { AddProduct } from "../pages/AddProduct";
import { EditProduct } from "../pages/EditProduct";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/editproduct/:id" element={<EditProduct />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
