import React from "react";

const WhoAreWe = (props) => {
  console.log(props.img);
  return (
    <section className="section bg-gradient-primary">
      <div className="container mt-60 ">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="section-title ms-lg-5">
              <h4 className="title text-white fw-semibold mb-3">
                {props.heading}
              </h4>
              <p className="text text-white">{props.description}</p>
              <button className="btn btn-danger mt-3 mb-3">
                VIEW SERVICES
                <i className="uil uil-arrow-right align-middle ps-2" />
              </button>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <img
              src={props.imgSrc}
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
