import React from "react";

const QuickService = () => {
  const QuickFeatureSize =
    QuickFeatureSize.length > 0 ? 12 / QuickFeatureSize.length : 12;
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-3">Specialist in Quick Service</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  fastest repair service with best price!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="features feature-primary border-0 d-flex">
                <div className="fea-icon rounded-circle bg-light shadow icon">
                  <i className="uil uil-wrench"></i>
                </div>

                <div className="content flex-1 ms-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    Mobile Service
                  </a>
                  <p className="text-muted mt-2 mb-0">
                    We are one of the leading smart devices service center, we
                    undertake mobile and smart devices service with all major
                    brands.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="features feature-primary border-0 d-flex">
                <div className="fea-icon rounded-circle bg-light shadow icon">
                  <i className="uil uil-sun"></i>
                </div>

                <div className="content flex-1 ms-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    Smart Devices Service
                  </a>
                  <p className="text-muted mt-2 mb-0">
                    Our company offers the most efficient and the greenest
                    repair service for your smart devices with 30 days warranty
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="features feature-primary border-0 d-flex">
                <div className="fea-icon rounded-circle bg-light shadow icon">
                  <i className="uil uil-airplay"></i>
                </div>

                <div className="content flex-1 ms-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    Virus Removal
                  </a>
                  <p className="text-muted mt-2 mb-0">
                    We are experts in Virus, spyware and other malware removal
                    from your affected mobile / smart devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="features feature-primary border-0 d-flex">
                <div className="fea-icon rounded-circle bg-light shadow icon">
                  <i className="uil uil-padlock"></i>
                </div>

                <div className="content flex-1 ms-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    Mobile Security
                  </a>
                  <p className="text-muted mt-2 mb-0">
                    We are one of the leading smart devices service center, we
                    undertake mobile and smart devices service with all major
                    brands.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="features feature-primary border-0 d-flex">
                <div className="fea-icon rounded-circle bg-light shadow icon">
                  <i className="uil uil-shield-check"></i>
                </div>

                <div className="content flex-1 ms-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    Network Services
                  </a>
                  <p className="text-muted mt-2 mb-0">
                    Network down? No Internet? We provide reliable and timely
                    service, We solving your networking problem in your Device.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="features feature-primary border-0 d-flex">
                <div className="fea-icon rounded-circle bg-light shadow icon">
                  <i className="uil uil-bright"></i>
                </div>

                <div className="content flex-1 ms-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    Software Installation
                  </a>
                  <p className="text-muted mt-2 mb-0">
                    Operating System Installations / Upgrade Services for your
                    mobile, smart devices, Install setup at your door step.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-5">
              VIEW ALL SERVICE
              <i className="uil uil-arrow-right align-middle ps-2" />
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default QuickService;
