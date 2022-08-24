import React, { useEffect, useState } from "react";
import BreadCrumb from "../Compenents/BreadCrumb";
import PageLayout from "../Compenents/PageLayout";
import products from "./../Data/OurProducts.json";
import { useParams } from "react-router-dom";

const Products = () => {
  const location = useParams();
  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    const data = location.type;
    console.log(location);
    for (const key in products) {
      if (key === data) {
        console.log(`${key}: ${products[key]}`);
        setMainData(products[key]);
      }
    }
  }, []);

  console.log(mainData);

  return (
    mainData !== null && (
      <PageLayout>
        <BreadCrumb heading={mainData?.Title} />
        <section className="section">
          <div className="container">
            <div className="row">
              {/* <img src={mainData?.imgSrc} /> */}
              <div className="col-lg-8 col-md-6">
                <div className="section-title">
                  <spand className="underline">
                    <h4>{mainData?.Title}</h4>
                  </spand>
                  <p className="mt-2 text-soft">
                    <strong>{mainData?.title1}</strong>
                  </p>
                  <ul className="text-muted mb-0">
                    {mainData.element1 !== undefined &&
                      mainData.element1.map((e, idx) => {
                        return (
                          <li>
                            <strong>{e.title}</strong> {e.details}
                          </li>
                        );
                      })}
                  </ul>
                  <h5 className="mt-4">{mainData?.title2}</h5>

                  <ul className=" text-muted mb-0">
                    {mainData?.element2 !== undefined &&
                      mainData?.element2.map((e, idx) => {
                        return <li className="mb-0">{e.details}</li>;
                      })}
                  </ul>
                  <h5 className="mt-4">
                    {" "}
                    {mainData?.title3 !== undefined && mainData?.title3}
                  </h5>
                  <div className="text-muted mb-0">
                    <ul>
                      {mainData?.element3 !== undefined &&
                        mainData?.element3.map((e, idx) => {
                          return <li>{e.details}</li>;
                        })}
                    </ul>
                  </div>

                  <h5 className="mt-4">
                    {" "}
                    {mainData?.title4 !== undefined && mainData?.title4}
                  </h5>
                  <div className="text-muted mb-0">
                    <ul>
                      {mainData?.element4 !== undefined &&
                        mainData?.element4.map((e, idx) => {
                          return <li>{e.details}</li>;
                        })}
                    </ul>
                  </div>

                  <h5 className="mt-4">
                    {" "}
                    {mainData?.title5 !== undefined && mainData?.title5}
                  </h5>
                  <div className="text-muted mb-0">
                    <ul>
                      {mainData?.element5 !== undefined &&
                        mainData?.element5.map((e, idx) => {
                          return <li>{e.details}</li>;
                        })}
                    </ul>
                  </div>

                  <h5 className="mt-4">
                    {" "}
                    {mainData?.title6 !== undefined && mainData?.title6}
                  </h5>
                  <div className="text-muted mb-0">
                    <ul>
                      {mainData?.element6 !== undefined &&
                        mainData?.element6.map((e, idx) => {
                          return <li>{e.details}</li>;
                        })}
                    </ul>
                  </div>

                  <h5 className="mt-4">
                    {" "}
                    {mainData?.title7 !== undefined && mainData?.title7}
                  </h5>
                  <div className="text-muted mb-0">
                    <ul>
                      {mainData?.element7 !== undefined &&
                        mainData?.element7.map((e, idx) => {
                          return <li>{e.details}</li>;
                        })}
                    </ul>
                  </div>

                  <h5 className="mt-4">
                    {" "}
                    {mainData?.title8 !== undefined && mainData?.title8}
                  </h5>
                  <div className="text-muted mb-0">
                    <ul>
                      {mainData?.element8 !== undefined &&
                        mainData?.element8.map((e, idx) => {
                          return <li>{e.details}</li>;
                        })}
                    </ul>
                  </div>
                  <h5 className="mt-4">
                    {" "}
                    {mainData?.title9 !== undefined && mainData?.title9}
                  </h5>
                  <div className="text-muted mb-0">
                    <ul>
                      {mainData?.element9 !== undefined &&
                        mainData?.element9.map((e, idx) => {
                          return <li>{e.details}</li>;
                        })}
                    </ul>
                  </div>
                  <h5 className="mt-4">
                    {" "}
                    {mainData?.title10 !== undefined && mainData?.title10}
                  </h5>
                  <div className="text-muted mb-0">
                    <ul>
                      {mainData?.element10 !== undefined &&
                        mainData?.element10.map((e, idx) => {
                          return <li>{e.details}</li>;
                        })}
                    </ul>
                  </div>
                  <h5 className="mt-4">
                    {" "}
                    {mainData?.title11 !== undefined && mainData?.title11}
                  </h5>
                  <div className="text-muted mb-0">
                    <ul>
                      {mainData?.element11 !== undefined &&
                        mainData?.element11.map((e, idx) => {
                          return <li>{e.details}</li>;
                        })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="sidebar sticky-bar">
                  <div className="widget text-center position-relative">
                    <div>
                      <div className="position-relative">
                        <h4 className="text-center">
                          {" "}
                          {mainData?.title12 !== undefined && mainData?.title12}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="widget mt-4 pt-2">
                    <ul className="text-muted mb-0">
                      {mainData?.element12 !== undefined &&
                        mainData?.element12.map((e, idx) => {
                          return <li className="mb-0">{e.details}</li>;
                        })}
                    </ul>

                    <div className="position-relative m-2">
                      <h4 className="text-center"> {mainData?.title13}</h4>
                    </div>
                    <ul className="text-muted mb-0">
                      {mainData?.element13 !== undefined &&
                        mainData?.element13.map((e, idx) => {
                          return <li className="mb-0">{e.details}</li>;
                        })}
                    </ul>
                    <div className="position-relative m-2">
                      <h4 className="text-center">{mainData?.title14}</h4>
                    </div>
                    <ul className="text-muted mb-0">
                      {mainData?.element14 !== undefined &&
                        mainData?.element14.map((e, idx) => {
                          return <li className="mb-0">{e.details}</li>;
                        })}
                    </ul>
                    <div className="position-relative m-2">
                      <h4 className="text-center">{mainData?.title15}</h4>
                    </div>
                    <ul className="text-muted mb-0">
                      {mainData?.element15 !== undefined &&
                        mainData?.element15.map((e, idx) => {
                          return <li className="mb-0">{e.details}</li>;
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    )
  );
};

export default Products;
