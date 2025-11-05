import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-8 bg-gray-50">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
