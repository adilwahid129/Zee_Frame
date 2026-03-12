import React from "react";
import Header from "./compnents/Header";
import Footer from "./compnents/Footer";
import { Outlet } from "react-router-dom";
import GlowCursor from "./compnents/GlowCursor";

const Layout = () => {
  return (
    <>
      <div className="relative">
        <GlowCursor />
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
