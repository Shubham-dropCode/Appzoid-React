import React from "react";
import NavBar from "../Compenents/NavBar";
import Footer from "../Compenents/Footer";
import BackToTop from "../Compenents/BackToTop";

export default function PageLayout({
  isHomePage = false,
  showNavbar = true,
  children,
}) {
  return (
    <>
      {showNavbar && <NavBar />}
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
