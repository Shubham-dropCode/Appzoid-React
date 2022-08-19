import React, { useEffect } from "react";
import Slider from "react-slick";
import BreadCrumb from "../Compenents/BreadCrumb";
import PageLayout from "../Compenents/PageLayout";
import services from "./../Data/OurServices.json"

const BuyBackProducts = () => {
  console.log(services.BuyBackProducts)
  return (
    <PageLayout>
      <BreadCrumb heading={services.BuyBackProductsTitle} />
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-6">
              <div class="section-title">
                <h4>{services.MainTitle}</h4>
                <ul class="text-muted mb-0">
                  {services.BuyBackProducts.AboutProductDetails.map((e, idx) => {
                    return (<li><strong>{e.title}</strong> {e.details}</li>)
                  })}

                </ul>
                <h5 class="mt-4">{services.BuyBackProducts.ExclusionsTitle}</h5>

                <ul class=" text-muted mb-0">
                  {services.BuyBackProducts.ExclusionsDetails.map((e, idx) => {
                    return (

                      <li class="mb-0">
                        {e.details}
                      </li>
                    )
                  })}

                </ul>
                <h5 class="mt-4"> Compensation Details: </h5>
                <ul>
                  <li class="mb-0">
                    We shall indemnify or exchange your re saleable device as per
                    following Matrix:
                  </li>
                </ul>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class=" text-center">
                        Age
                      </th>
                      <th scope="col" class=" text-center">
                        With All Original & Packaging Box
                      </th>
                      <th scope="col" class=" text-center">
                        Without or incomplete Original & Packaging Box
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class=" text-center"></th>
                      <td></td>
                      <th colSpan={3} class=" text-center">
                        Working Condition
                      </th>
                    </tr>
                    <tr>
                      <th class=" text-center"> Up to 90 days</th>
                      <td class=" text-center">60% of Device Value</td>
                      <td class=" text-center"> 50% of Device Value</td>
                    </tr>
                    <tr>
                      <th class=" text-center"> 91 to 180 days</th>
                      <td class=" text-center"> 50% of Device Value</td>
                      <td class=" text-center"> 40% of Device Value</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                      <td class=" text-center">
                        <strong> Non working Condition</strong>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" class=" text-center">
                        {" "}
                        Up to 180 days
                      </th>
                      <td class=" text-center"> 20% of Device Value</td>
                      <td class=" text-center"> 10% of Device Value</td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-4"> {services.BuyBackProducts.DocumentlistTitle}</h5>
                <div class="text-muted mb-0">
                  <ul>
                    {services.BuyBackProducts.DocumentlistDetails.map((e, idx) => {
                      return (<li>
                        {e.details}
                      </li>)
                    })}


                  </ul>
                </div>

              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div class="sidebar sticky-bar">
                <div class="widget text-center position-relative">
                  <div class="rounded shadow bg-white">
                    <div class="position-relative">
                      <h4> {services.BuyBackProducts.termsConditionTitle}</h4>
                    </div>
                  </div>
                </div>

                <div class="widget mt-4 pt-2">
                  <ul class="text-muted mb-0">
                    {services.BuyBackProducts.termsConditionDetails.map((e, idx) => {
                      return (
                        <li class="mb-0">
                          {e.details}
                        </li>

                      )
                    })}


                  </ul>

                  <div class="position-relative m-2">
                    <h4> {services.BuyBackProducts.SchemeTitle}</h4>
                  </div>
                  <ul class="text-muted mb-0">
                    {services.BuyBackProducts.SchemeDetails.map((e, idx) => {
                      return (
                        <li class="mb-0">{e.details}</li>

                      )
                    })}

                  </ul>
                  <div class="position-relative m-2">
                    <h4>{services.BuyBackProducts.CancellationsTitle}</h4>
                  </div>
                  <ul class="text-muted mb-0">
                    {services.BuyBackProducts.CancellationsDetails.map((e, idx) => {
                      return (
                        <li class="mb-0">
                          {e.details}
                        </li>

                      )
                    })}
                  </ul>
                  <div class="position-relative m-2">
                    <h4>{services.BuyBackProducts.DisclaimerTitle}</h4>
                  </div>
                  <ul class="text-muted mb-0">
                    {services.BuyBackProducts.DisclaimerDetails.map((e, idx) => {
                      return (
                        <li class="mb-0">
                          {e.details}
                        </li>

                      )
                    })}

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BuyBackProducts;
