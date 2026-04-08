import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ServicesPage from "../pages/services";
import WorkPage from "../pages/work";
import InsightsPage from "../pages/insights";
import ContactUs from "../pages/contact";
import BlogDetail from "../pages/insights/BlogDetail";
import ProductStrategyConsulting from "../pages/services/ProductDesign/ProductStrategyConsulting";
import UXResearchAndInsights from "../pages/services/ProductDesign/UXResearchAndInsights";
import ProductRoadmapping from "../pages/services/ProductDesign/ProductRoadmapping";
import ExperienceArchitecture from "../pages/services/ProductDesign/ExperienceArchitecture";
import UIUXDesign from "../pages/services/ProductDesign/UIUXDesign";
import DesignSystemsAndGuidelines from "../pages/services/ProductDesign/DesignSystemsAndGuidelines";
import PrototypingAndUserTesting from "../pages/services/ProductDesign/PrototypingAndUserTesting";
import InteractionAndMotionDesign from "../pages/services/ProductDesign/InteractionAndMotionDesign";
import UIUXAuditAndOptimization from "../pages/services/ProductDesign/UIUXAuditAndOptimization";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          //ProductStrategyConsulting
          <Route path="/services/ProductStrategyConsulting" element={<ProductStrategyConsulting />} />
          <Route path="/services/UXResearchAndInsights" element={<UXResearchAndInsights />} />
          <Route path="/services/ProductRoadmapping" element={<ProductRoadmapping />} />
          <Route path="/services/ExperienceArchitecture" element={<ExperienceArchitecture />} />
          <Route path="/services/UIUXDesign" element={<UIUXDesign />} />
          <Route path="/services/DesignSystemsAndGuidelines" element={<DesignSystemsAndGuidelines />} />
          <Route path="/services/PrototypingAndUserTesting" element={<PrototypingAndUserTesting />} />
          <Route path="/services/InteractionAndMotionDesign" element={<InteractionAndMotionDesign />} />
          <Route path="/services/UIUXAuditAndOptimization" element={<UIUXAuditAndOptimization />} />

          <Route path="/work" element={<WorkPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
