import React from "react";
import NavBar from "../Compenents/NavBar";
import BreadCrumb from "../Compenents/BreadCrumb";
import ContactDetails from "../Compenents/ContactDetails";
import Footer from "../Compenents/Footer";
import BackToTop from "../Compenents/BackToTop";

const ContactUs = () => {
  return (
    <React.Fragment>
      {" "}
      <NavBar />
      <BreadCrumb heading="Contact Us" />
      <ContactDetails />
      <Footer />
      <BackToTop />
    </React.Fragment>
  );
};

export default ContactUs;
