import React from "react";
import NavBar from "../Compenents/NavBar";
import BreadCrumb from "../Compenents/BreadCrumb";
import Footer from "../Compenents/Footer";
import ComingSoonCard from "../Compenents/ComingSoonCard";
import BackToTop from "../Compenents/BackToTop";

const ComingSoon = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BreadCrumb heading="Coming Soon" />
      <ComingSoonCard />
      <Footer />
      <BackToTop />
    </React.Fragment>
  );
};

export default ComingSoon;
