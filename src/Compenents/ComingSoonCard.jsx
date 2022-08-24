import React from "react";
import { Link } from "react-router-dom";

const ComingSoonCard = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {props.OurServicesCard.map((element, idx) => {
            return (
              <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2" key={idx}>
                <div className="card features feature-success features-classic h-100 p-4 rounded-md shadow border">
                  <div className="fea-icon bg-soft rounded-md">
                    <i className={element.icon}></i>
                  </div>

                  <div className="content mt-4">
                    <h5 className="mb-3">{element.title}</h5>
                    <Link
                      to={element.title}
                      className="title btn border border-success btn-sm text-dark"
                    >
                      Read More{" "}
                      <i className="uil uil-arrow-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonCard;
