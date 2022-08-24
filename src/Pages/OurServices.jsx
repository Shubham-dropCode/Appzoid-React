import React from "react";
import BreadCrumb from "../Compenents/BreadCrumb";
import ComingSoonCard from "../Compenents/ComingSoonCard";
import PageLayout from "../Compenents/PageLayout";
import data from "../Data/Content.json";

const ComingSoon = () => {
  return (
    <PageLayout>
      <BreadCrumb heading={data.OurServicesBreadCrumbTitle} />
      <ComingSoonCard OurServicesCard={data.OurServicesCard} />
    </PageLayout>
  );
};

export default ComingSoon;
