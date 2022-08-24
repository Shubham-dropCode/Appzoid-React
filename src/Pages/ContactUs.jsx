import React from "react";
import BreadCrumb from "../Compenents/BreadCrumb";
import ContactDetails from "../Compenents/ContactDetails";
import PageLayout from "../Compenents/PageLayout";
import data from "../Data/Content.json"

const ContactUs = () => {
  return (
    <PageLayout>
      <BreadCrumb heading={data.ContactBreacCrumbTitle} />
      <ContactDetails ContactPhoneWhatsapp={data.ContactPhoneWhatsapp}
        PhoneUser={data.ContactPhoneUser}
        Email={data.ContactEmail}
        Address={data.ContactAddress}
      />
    </PageLayout>
  );
};

export default ContactUs;
