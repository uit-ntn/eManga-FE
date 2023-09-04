import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Layout.css";

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <span className="child">{children}</span>
      <Footer />
    </div>
  );
}

export default Layout;
