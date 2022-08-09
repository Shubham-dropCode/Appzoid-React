import React from "react";

const LatestBlog = () => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-3">Latest from Our Blog</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Our design projects are fresh and simple and will benefit your
                  business greatly. Learn more about our work!
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog blog-primary shadow rounded overflow-hidden">
                <div className="image position-relative overflow-hidden">
                  <img src="images/blog/06.jpg" className="img-fluid" alt="" />

                  <div className="blog-tag">
                    <a href="" className="badge bg-light">
                      Corporate
                    </a>
                  </div>
                </div>

                <div className="card-body content">
                  <a
                    href="blog-detail-five.html"
                    className="h5 title text-dark d-block mb-0"
                  >
                    Building Your Corporate Identity from Starty
                  </a>
                  <p className="text-muted mt-2 mb-2">
                    The most well-known dummy text is the 'Lorem Ipsum', in the
                    16th century.
                  </p>
                  <a href="blog-detail-five.html" className="link text-dark">
                    Read More{" "}
                    <i className="uil uil-arrow-right align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog blog-primary shadow rounded overflow-hidden">
                <div className="image position-relative overflow-hidden">
                  <img src="images/blog/07.jpg" className="img-fluid" alt="" />

                  <div className="blog-tag">
                    <a href="" className="badge bg-light">
                      Branding
                    </a>
                  </div>
                </div>

                <div className="card-body content">
                  <a
                    href="blog-detail-five.html"
                    className="h5 title text-dark d-block mb-0"
                  >
                    The Dark Side of Overnight Success
                  </a>
                  <p className="text-muted mt-2 mb-2">
                    The most well-known dummy text is the 'Lorem Ipsum', in the
                    16th century.
                  </p>
                  <a href="blog-detail-five.html" className="link text-dark">
                    Read More{" "}
                    <i className="uil uil-arrow-right align-middle"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog blog-primary shadow rounded overflow-hidden">
                <div className="image position-relative overflow-hidden">
                  <img src="images/blog/08.jpg" className="img-fluid" alt="" />

                  <div className="blog-tag">
                    <a href="" className="badge bg-light">
                      Technology
                    </a>
                  </div>
                </div>

                <div className="card-body content">
                  <a
                    href="blog-detail-five.html"
                    className="h5 title text-dark d-block mb-0"
                  >
                    The Right Hand of Business IT World
                  </a>
                  <p className="text-muted mt-2 mb-2">
                    The most well-known dummy text is the 'Lorem Ipsum', in the
                    16th century.
                  </p>
                  <a href="blog-detail-five.html" className="link text-dark">
                    Read More{" "}
                    <i className="uil uil-arrow-right align-middle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LatestBlog;
