import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FeatureSection({ title = "", features = [] }) {
  const featureSize = features.length > 0 ? 12 / features.length : 12;
  const navigate = useNavigate();
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="display-5 pb-5">{title}</h1>
        <div className="row">
          {features.map((feature, idx) => {
            return (
              <div
                className={"col-sm- col-md-" + featureSize}
                key={idx}
                onClick={() => {
                  navigate(feature.linkTo);
                }}
              >
                <div className="features feature-primary feature-bg border-0 p-4 h-100 rounded text-center clickable">
                  <div className="fea-icon rounded-lg text-white title-dark shadow-lg m-auto">
                    <i className={"las la-2x " + feature.icon}></i>
                  </div>

                  <div className="content mt-3">
                    <Link to={feature.linkTo} className="title h5 text-dark">
                      {feature.title}
                    </Link>
                    <p className="text-muted para mt-2 mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
