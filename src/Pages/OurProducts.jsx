import React from "react";
import BreadCrumb from "../Compenents/BreadCrumb";
import Card from "../Compenents/Card";
import PageLayout from "../Compenents/PageLayout";
import data from "../Data/Content.json";

const OurProducts = () => {
  return (
    <PageLayout>
      {/* <NavBar /> */}
      <BreadCrumb heading={data.OurProductsBreadcrumbTitle} />

      <section className="section">
        <div className="container-fluid">
          <div className="row">
            {data.ProductDetails.map((element, index) => {
              return (
                <div className="col-lg-6 mb-4 pb-2" key={index}>
                  <Card
                    heading={element.ProductTitle}
                    description={element.ProductDescription}
                    imgSrc={element.imgSrc}
                    linkTO={element.linkTO}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default OurProducts;
