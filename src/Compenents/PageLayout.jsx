import React from "react";
import NavBar from "../Compenents/NavBar";
import Hero from "../Compenents/Hero";
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
      {isHomePage && <Hero />}
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
