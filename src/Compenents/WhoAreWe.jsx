import React from "react";
import { Link } from "react-router-dom";
import FlexBox from "./FlexBox";

export default function WhoAreWe({
  title = "",
  description = "",
  cta = {},
  image = "",
}) {
  return (
    <section className="section pt-0">
      <div className="container bg-light">
        <FlexBox className="p-5">
          <div className="col-8 px-2">
            <h3 className="pb-3">
              <span className="underline">{title}</span>
            </h3>
            <p className="lead pb-5">{description}</p>
            <Link className="btn btn-primary" to={cta.linkTo}>
              {cta.title}
            </Link>
          </div>
          <div className="d-block col-md-4 text-end">
            <img className="w-100 shadow-md" src={image} alt={title} />
          </div>
        </FlexBox>
      </div>
    </section>
  );
}
