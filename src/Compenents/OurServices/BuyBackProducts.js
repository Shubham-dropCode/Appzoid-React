import React from "react";
import Slider from "react-slick";
import services from "../../Data/OurServices.json";

const BuyBackProducts = () => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-6">
            <div class="section-title">
              <h4 class="mt-4">About Product</h4>
              <ul class="text-muted mb-0">
                <li>
                  <strong>Beneficiary/User:</strong>The purchaser, whose name is
                  as shown on the However his / her Spouse, Children & Parents
                  can avail the benefit under this scheme. Where the purchaser
                  is a company, beneficiary/user shall mean any representative /
                  employee of the company authorised to use & avail the benefit.
                  Covered Equipment: Product as shown on purchase Invoice i.e.
                  Mobile Handset.
                </li>
                <li>
                  <strong>Covered Equipment:</strong>Product as shown on
                  purchase Invoice i.e. Mobile Handset.
                </li>
                <li>
                  <strong>Medium:</strong> Benefit of BUY BACK can be obtained
                  any store or App & Online channel only.
                </li>
                <li>
                  <strong>Cover Period:</strong>365 days from the date of
                  Purchase of device.
                </li>
                <li>
                  <strong>Device Value:</strong>Product i.e. Handset value as
                  mentioned in Purchase Invoice.
                </li>
                <li>
                  <strong>Event: Working Condition:</strong>Device is functional
                  completely.
                </li>
                <li>
                  <strong>Non-working:</strong>i.e. Device is non functional due
                  to Liquid damage or Screen Broken.
                </li>
              </ul>
              <h5 class="mt-4">Exclusions details</h5>

              <ul class=" text-muted mb-0">
                <li class="mb-0">
                  Any Criminal activity has come across including Terrorism
                  activity, War, Nuclear Explosion, Radioactive Contamination,
                  Chemical, Biochemical, Biological, Electromagnetic, Cyber
                  Attack etc.
                </li>
                <li class="mb-0">
                  Device purchased or exchange request beyond the territorial
                  limits of India.
                </li>
                <li class="mb-0">
                  Any exchange request arising post 365 days from the purchase
                  date of device.
                </li>
                <li class="mb-0">
                  Consequential loss of any kind or description including wear &
                  tear, manufacturing defects etc.
                </li>
                <li class="mb-0">
                  If claim for exchange is lodged within 21days from the date of
                  purchase of buy back guarantee.
                </li>
                <li class="mb-0">
                  Any mismatch of IMEI or serial number between box, device &
                  Invoice.
                </li>

                <li class="mb-0">
                  Any fault such as touch not working /physical damages/liquid
                  damages/ scratches/chipping, charging defect or any similar
                  kind of defect.
                </li>
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

              <h5 class="mt-4"> Document Checklist: </h5>
              <div class="text-muted mb-0">
                <ul>
                  <li>
                    Customer declaration towards discharge of liability &
                    consent to resale (available on webpage)
                  </li>
                  <li>Original Invoice Copy</li>
                  <li>Photo ID proof</li>
                  <li>
                    If user is different than purchaser then consent or
                    authorization letter duly signed & attested by purchaser. In
                    case of company authorized certificate confirming employee
                    who can avail benefit under this scheme
                  </li>
                  <li>
                    Swap Certificate in case of device is replaced or IMEI or
                    serial number is changed under warranty by brand
                  </li>
                </ul>
              </div>
              {/* <div class="progress-box mt-4">
                <h6 class="text-muted fw-normal">Research</h6>
                <div class="progress position-relative">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style={{ width: "84%" }}
                  ></div>
                  <div class="progress-value d-block text-muted h6 fw-normal">
                    84%
                  </div>
                </div>
              </div>

              <div class="progress-box mt-4">
                <h6 class="text-muted fw-normal">Sales & Trading</h6>
                <div class="progress position-relative">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style={{ width: "75%" }}
                  ></div>
                  <div class="progress-value d-block text-muted h6 fw-normal">
                    75%
                  </div>
                </div>
              </div>

              <div class="progress-box mt-4">
                <h6 class="text-muted fw-normal">Investment</h6>
                <div class="progress position-relative">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style={{ width: "79%" }}
                  ></div>
                  <div class="progress-value d-block text-muted h6 fw-normal">
                    79%
                  </div>
                </div>
              </div>

              <div class="progress-box mt-4">
                <h6 class="text-muted fw-normal">Finance</h6>
                <div class="progress position-relative">
                  <div
                    class="progress-bar position-relative bg-primary"
                    style={{ width: "95%" }}
                  ></div>
                  <div class="progress-value d-block text-muted h6 fw-normal">
                    95%
                  </div>
                </div>
              </div> */}
              {/* <h5 class="mt-4">Reviews: </h5> */}
              {/* <div class="bg-primary bg-gradient rounded shadow-lg px-4 py-5 mt-4">
                <div class="card text-center">
                  <img
                    src="images/client/01.jpg"
                    class="avatar avatar-medium rounded-pill mx-auto"
                    alt=""
                  />

                  <div class="card-body pb-0 content">
                    <p class="h5 fw-normal text-white-50 fst-italic">
                      " The advantage of its Latin origin and the relative
                      meaninglessness of Lorum Ipsum is that the text does not
                      attract attention to itself or distract the viewer's
                      attention from the layout. "
                    </p>

                    <div class="name mt-4">
                      <small class="text-uppercase text-light title-dark fw-semibold d-block">
                        Johnny Rosario
                      </small>
                      <small class="text-white-50">C.E.O</small>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="sidebar sticky-bar">
              <div class="widget text-center position-relative">
                <div class="rounded shadow bg-white">
                  <div class="position-relative">
                    <h4> Terms & Conditions scheme</h4>
                  </div>
                </div>
              </div>

              <div class="widget mt-4 pt-2">
                <ul class="text-muted mb-0">
                  <li class="mb-0">
                    Offer can be availed or redeemed only on device which are in
                    resalable condition.
                  </li>

                  <li class="mb-0">
                    If Device is swapped due to DOA, this scheme is auto
                    transferred subject to swap certificate to be submitted at
                    Point of exchange.
                  </li>
                  <li class="mb-0">
                    All original accessories including additional benefit as per
                    consumer offer by brand should be submitted by the purchaser
                    along with original device package box or material, In case
                    of duplicate accessories including battery submitted,
                    replacement shall not be offered in any circumstances.
                  </li>
                  <li class="mb-0">
                    This offer is applicable only for brands such as Apple,
                    Samsung , Vivo , Oppo , Xiaomi One Plus & Realme.
                  </li>
                  <li class="mb-0">
                    Without Accessories or original device box additional
                    deduction of 20% on device value.
                  </li>
                  <li class="mb-0">
                    Device exchange is not allowed for 1st 21 days from the date
                    of purchase of device i.e.21 days waiting period.
                  </li>
                  <li class="mb-0">All dispute as per India Jurisdiction.</li>
                  <li class="mb-0">
                    If Original device, accessories including battery is
                    tampered then replacement shall not be allowed under this
                    offer.
                  </li>
                  <li class="mb-0">
                    Offer applicable only for Major Indian Citizen.
                  </li>
                </ul>

                <div class="position-relative m-2">
                  <h4> Scheme details</h4>
                </div>
                <ul class="text-muted mb-0">
                  <li class="mb-0">Protected or beneficiary agrees that:</li>
                  <li class="mb-0">
                    Take all reasonable steps to safeguard the equipment.
                  </li>
                  <li class="mb-0">
                    In the event of exchange, all benefits shall be forfeited,
                    where there are any misrepresentations, misdescription or
                    non-disclosure of any material fact significant to admission
                    of liability and assessment of device at the time of
                    exchange.
                  </li>
                </ul>
                <div class="position-relative m-2">
                  <h4>Cancellations</h4>
                </div>
                <ul class="text-muted mb-0">
                  <li class="mb-0">
                    Administrator have all the rights to cancel this offer
                    during wait period or 30 days from the date of purchase of
                    buy back guarantee whichever is higher, where by
                    administrator when cancel the offer entire amount shall be
                    refunded.
                  </li>
                </ul>
                <div class="position-relative m-2">
                  <h4>Disclaimer</h4>
                </div>
                <ul class="text-muted mb-0">
                  <li class="mb-0">
                    This is a non-insurance scheme please read the all the terms
                    and condition carefully.
                  </li>
                  <li class="mb-0">
                    Issuance of this document is deemed to the acceptance of all
                    terms & condition under this programme .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyBackProducts;
