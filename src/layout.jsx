import React from "react";
import Header from "./compnents/Header";
import Footer from "./compnents/Footer";
import { Outlet } from "react-router-dom";
import GlowCursor from "./compnents/GlowCursor";
import ScrollToTop from './compnents/ScrollToTop'


const Layout = () => {
  return (
    <>
      <div className="relative">
        <GlowCursor />
        <ScrollToTop />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
