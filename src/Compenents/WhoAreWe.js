import React from "react";

const WhoAreWe = () => {
  return (
    <section className="section bg-gradient-primary">
      <div className="container mt-60 ">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="section-title ms-lg-5">
              <h4 className="title text-white fw-semibold mb-3">Who We Are</h4>
              <p className="text text-white">
                Telangana based Appzoid Resolutions is locked in changing the
                after deals benefit encounter. We esteem constancy, deftness,
                adeptness development, agility, supportability and specialised
                in Mobile Repairs and Services, We repair out of warranty mobile
                and smart gadgets.
              </p>
              <button className="btn btn-danger mt-3 mb-3">
                VIEW SERVICES
                <i className="uil uil-arrow-right align-middle ps-2" />
              </button>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <img
              src="images/about.jpg"
              className="img-fluid rounded shadow"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
