import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ServicesPage from "../pages/services";
import WorkPage from "../pages/work";
import InsightsPAge from "../pages/insights";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/insights" element={<InsightsPAge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
