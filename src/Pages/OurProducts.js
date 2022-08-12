import React from "react";
import BreadCrumb from "../Compenents/BreadCrumb";
import Card from "../Compenents/Card";
import Footer from "../Compenents/Footer";
import NavBar from "../Compenents/NavBar";

const OurProducts = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BreadCrumb heading="Our Products" />
      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 mb-4 pb-2">
              <Card
                heading="365 DAYS ACCIDENTAL DAMAGE AND LIQUID DAMAGE TERMS AND CONDITIONS"
                description="Valid for 12 months ( 365 days )from the date of purchase."
                imgSrc="../images/Our products/OurProduct1.png"
              />
            </div>
            <div className="col-lg-6 mb-4 pb-2">
              <Card
                heading="365 DAYS ACCIDENTAL & LIQUID DAMAGE PROGRAMME FAQ"
                description="We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff."
                imgSrc="../images/Our products/OurProduct2.jpg"
              />
            </div>
            <div className="col-lg-6 mb-4 pb-2">
              <Card
                heading="180 DAYS ONE TIME SCREEN REPLACEMENT"
                description="Valid for180 DAYS ( 6 months) from the date of purchase of device, To avail benefit under this offer contact us within 5 days from the date & time of damage"
                imgSrc="../images/Our products/OurProduct3.jpg"
              />
            </div>
            <div className="col-lg-6 mb-4 pb-2">
              <Card
                heading="365 DAYS ONE TIME SCREEN REPLACEMENT"
                description="To avail benefit under this offer, contact us within 5 days from the date & time of damage"
                imgSrc="../images/Our products/OurProduct4.jpg"
              />
            </div>
            <div className="col-lg-6 mb-4 pb-2">
              <Card
                heading="HARDWARE UPDATE"
                description="We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff."
                imgSrc="../images/Our products/OurProduct5.jpg"
              />
            </div>
            <div className="col-lg-6 mb-4 pb-2">
              <Card
                heading="MOBILE SECURITY SYSTEMS"
                description="We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff."
                imgSrc="../images/Our products/OurProduct6.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default OurProducts;
