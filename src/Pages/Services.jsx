import React, { useEffect, useState } from "react";

import BreadCrumb from "../Compenents/BreadCrumb";
import PageLayout from "../Compenents/PageLayout";
import services from "./../Data/OurServices.json";
import { useParams } from "react-router-dom";


const Services = () => {
  const location = useParams();
  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    const data = location.type;
    console.log(data);

    for (const key in services) {
      console.log(key);
      if (key === data) {
        console.log(`${key}: ${services[key]}`);
        setMainData(services[key]);
      }
    }
  }, []);

  // console.log(mainData);
  return (
    mainData !== null && (
      <PageLayout>
        <BreadCrumb heading={mainData?.Title} />
        <section className="section">
          <div className="container">
            <div className="row">
              <img src={mainData?.imgSrc} alt="COMING SOON" />
              <div className="col-lg-8 col-md-6">
                <div className="section-title">
                  <h4>{mainData?.MainTitle}</h4>
                  <p className="mt-2 text-soft">
                    <strong>{mainData?.SubTitle}</strong>
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
                  <h5 className="mt-4">{mainData.table} </h5>
                  <ul>
                    {mainData?.tableElement?.content !== undefined &&
                      mainData?.tableElement?.content.map((e, idx) => {
                        return <li className="mb-0">{e.listItem}</li>;
                      })}
                  </ul>
                  <table className="table">
                    <thead>
                      <tr>
                        {mainData?.tableElement?.columns !== undefined &&
                          mainData?.tableElement?.columns.map((e) => {
                            return (
                              <th scope="col" className=" text-center">
                                {e}
                              </th>
                            );
                          })}
                      </tr>
                    </thead>
                    <tbody>
                      {mainData?.tableElement?.rows !== undefined &&
                        mainData?.tableElement?.rows?.map((e) => {
                          return (
                            <tr>
                              <th className=" text-center">{e.Age}</th>
                              <td className=" text-center">
                                {e.OriginalPackagingBox}
                              </td>
                              <td className=" text-center">{e.empt}</td>
                              <td className=" text-center">
                                {e.WithoutOriginalPackagingBox}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
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
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="sidebar sticky-bar">
                  <div className="widget text-center position-relative">
                    <div className="rounded shadow bg-white">
                      <div className="position-relative">
                        <h4>
                          {" "}
                          {mainData?.title5 !== undefined && mainData?.title5}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="widget mt-4 pt-2">
                    <ul className="text-muted mb-0">
                      {mainData?.element5 !== undefined &&
                        mainData?.element5.map((e, idx) => {
                          return <li className="mb-0">{e.details}</li>;
                        })}
                    </ul>

                    <div className="position-relative m-2">
                      <h4> {mainData?.title6}</h4>
                    </div>
                    <ul className="text-muted mb-0">
                      {mainData?.element6 !== undefined &&
                        mainData?.element6.map((e, idx) => {
                          return <li className="mb-0">{e.details}</li>;
                        })}
                    </ul>
                    <div className="position-relative m-2">
                      <h4>{mainData?.title7}</h4>
                    </div>
                    <ul className="text-muted mb-0">
                      {mainData?.element7 !== undefined &&
                        mainData?.element7.map((e, idx) => {
                          return <li className="mb-0">{e.details}</li>;
                        })}
                    </ul>
                    <div className="position-relative m-2">
                      <h4>{mainData?.title8}</h4>
                    </div>
                    <ul className="text-muted mb-0">
                      {mainData?.element8 !== undefined &&
                        mainData?.element8.map((e, idx) => {
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

export default Services;
