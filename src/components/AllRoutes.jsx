import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddPage } from "../pages/AddPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/addproduct" element={<AddPage />} />
    </Routes>
  );
};
