import React from 'react'
import BreadCrumb from "../Compenents/BreadCrumb";
import PageLayout from "../Compenents/PageLayout";
import services from "./../Data/OurServices.json"

const WarrantyProgramme = () => {
    console.log(services.WarrentyProgram)
    return (
        <PageLayout>
            <BreadCrumb heading={services.WarrentyProgramTitle} />
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="section-title">
                                <h4 >{services.MainTitle}</h4>
                                <p class="mt-2"><strong>{services.PriceProtect.title}</strong></p>
                                <ul class="text-muted mb-0">
                                    {services.WarrentyProgram.ExtendWarrentyDetails.map((e, idx) => {
                                        return (<li class="text-muted pt-2 pb-2" key={idx}><strong>{e.title}</strong> {e.details}</li>)
                                    })}

                                </ul>
                                <h5 class="mt-4">{services.WarrentyProgram.ScopeOfProjectTitle}</h5>

                                <ul class=" text-muted mb-0">



                                    <li class="mb-0 pt-2 pb-2">
                                        {services.WarrentyProgram.ScopeOfProjectDetails}
                                    </li>


                                </ul>
                                <h5 class="mt-4"> {services.WarrentyProgram.CompensationProductTitle} </h5>
                                <ul>
                                    <li class="mb-0 text-muted pt-2 pb-2">
                                        <strong>Total Loss: –</strong> Compensation for any Total Loss claims will be by way of replacement through redeemable e voucher designated or listed store or channel  Maximum liability , subject to depreciation depending on age of EW products equipment from date of purchase at the date & time of loss.
                                    </li>
                                </ul>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" class=" text-center">
                                                Age
                                            </th>
                                            <th scope="col" class=" text-center">
                                                Description
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">Up to 2 Years</td>
                                            <td class="text-center">35% of Purchase Prices</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <tr>
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
                        </tr> */}

                                <h5 class="mt-4"> {services.WarrentyProgram.ProductTermsTitle}</h5>
                                <div class="text-muted mb-0">
                                    <ul>
                                        {services.WarrentyProgram.ProductTermsDetails.map((e, idx) => {
                                            return (<li class="text-muted pt-2 pb-2">
                                                {e.details}
                                            </li>)
                                        })}


                                    </ul>
                                </div>

                                <h5 class="mt-4"> {services.WarrentyProgram.ProductClaimTitle}</h5>
                                <div class="text-muted mb-0">
                                    <ul>
                                        {services.WarrentyProgram.ProductClaimDetails.map((e, idx) => {
                                            return (<li class="text-muted pt-2 pb-2">
                                                {e.details}
                                            </li>)
                                        })}


                                    </ul>
                                </div>
                                <strong>This scheme is available at registered stores/outlets.</strong>
                                <ul><li class="text-muted pt-2 pb-2">FOR MORE DETAILS REACH US @ GIVEN CONTACT NUMBERS.</li></ul>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div class="sidebar sticky-bar">
                                <div class="widget text-center position-relative">
                                    <div class="rounded shadow bg-white">
                                        <div class="position-relative">
                                            <h4> {services.WarrentyProgram.ExclusionProductTitle}</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="widget mt-4 pt-2">
                                    <ul class="text-muted mb-0">
                                        {services.WarrentyProgram.ExclusionProductDetails.map((e, idx) => {
                                            return (
                                                <li class="text-muted">
                                                    {e.details}
                                                </li>

                                            )
                                        })}


                                    </ul>

                                    {/* <div class="position-relative m-2">
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
    
                      </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}

export default WarrantyProgramme