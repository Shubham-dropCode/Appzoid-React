import React from "react";
import NavBar from "../Compenents/NavBar";
import Footer from "../Compenents/Footer";
import BackToTop from "../Compenents/BackToTop";
import data from "../Data/Content.json";

export default function PageLayout({
  isHomePage = false,
  showNavbar = true,
  children,
}) {
  return (
    <>
      {showNavbar && <NavBar />}
      {children}
      <Footer FooterLogo={data.FooterLogo} description={data.FooterDescription} menu={data.FooterMenu} mediaLinks={data.FooterMediaLinks} />
      <BackToTop />
    </>
  );
}
