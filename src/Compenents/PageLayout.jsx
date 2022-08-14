import React from "react";
import NavBar from "../Compenents/NavBar";
import Hero from "../Compenents/Hero";
import Footer from "../Compenents/Footer";
import BackToTop from "../Compenents/BackToTop";

export default function PageLayout({
  isHomePage = false,
  showNavbar = true,
  heroDetails = {},
  children,
}) {
  return (
    <>
      {showNavbar && <NavBar />}
      {isHomePage && <Hero {...heroDetails} />}
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
