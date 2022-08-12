import React from "react";
import NavBar from "../Compenents/NavBar";
import BreadCrumb from "../Compenents/BreadCrumb";
import Footer from "../Compenents/Footer";
import ComingSoonCard from "../Compenents/ComingSoonCard";

const ComingSoon = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BreadCrumb heading="Coming Soon" />
      <ComingSoonCard />
      <Footer />
    </React.Fragment>
  );
};

export default ComingSoon;
