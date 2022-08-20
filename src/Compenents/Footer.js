import React from "react";
import { Link } from "react-router-dom";

const Footer = ({
  FooterLogo = "",
  description = "",
  menu = [],
  mediaLinks = [],
}) => {
  return (
    <React.Fragment>
      <footer className="footer bg-footer">
        <div className="py-5 bg-primary footer-border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="section-title">
                  <div className="d-flex">
                    <i className="uil uil-envelope-star display-4 text-white title-dark"></i>
                    <div className="flex-1 ms-md-4 ms-3">
                      <h4 className="fw-semibold text-light title-dark mb-1">
                        We’ll repair and diagnose any Smart Devices problems
                      </h4>
                      <p className="text-white-50 mb-0">
                        10 Years of experience in Mobile Diagonistic service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-4 mt-sm-0">
                <div className="text-md-end ms-5 ms-sm-0">
                  <Link to="/contactus" className="btn btn-warning">
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-60">
                <div className="row">
                  <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <Link to="/" className="logo-footer">
                      <img src={FooterLogo} alt="" />
                    </Link>
                    <p className="mt-4">{description}</p>
                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                      {mediaLinks.map((Mlink) => {
                        return (
                          <li className="list-inline-item">
                            <Link
                              to={Mlink.linkTo}
                              target="_blank"
                              className="rounded"
                            >
                              <i className={Mlink.icon} title="facebook"></i>
                            </Link>
                          </li>
                        );
                      })}

                      {/* <li className="list-inline-item">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="rounded"
                        >
                          <i
                            className="uil uil-facebook-f align-middle"
                            title="facebook"
                          ></i>
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a
                          href="http://linkedin.com"
                          target="_blank"
                          className="rounded"
                        >
                          <i className="uil uil-linkedin" title="Linkedin"></i>
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="rounded"
                        >
                          <i
                            className="uil uil-instagram align-middle"
                            title="instagram"
                          ></i>
                        </a>
                      </li>
                      
                      <li className="list-inline-item">
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="rounded"
                        >
                          <i
                            className="uil uil-twitter align-middle"
                            title="twitter"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="mailto:support@shreethemes.in"
                          className="rounded"
                        >
                          <i
                            className="uil uil-envelope align-middle"
                            title="email"
                          ></i>
                        </a>
                      </li> */}
                    </ul>
                  </div>

                  <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h6 className="footer-head">Company</h6>
                    <ul className="list-unstyled footer-list mt-4">
                      {menu.map((item) => {
                        return (
                          <li>
                            <Link to={item.linkTo} className="text-foot">
                              <i className="uil uil-angle-right-b me-1"></i>{" "}
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                      {/* <li>
                        <Link to="/AboutUs" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> About
                          us
                        </Link>
                      </li>
                      <li>
                        <Link to="/OurProducts" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Our
                          Product
                        </Link>
                      </li>
                      <li>
                        <Link to="/ComingSoon" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Coming
                          Soon
                        </Link>
                      </li>
                      <li>
                        <Link to="/ContactUs" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> Contact
                          Us
                        </Link>
                      </li> */}
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h6 className="footer-head">Latest News</h6>
                    {/* <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a href="" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> What is
                          Liquid Damage
                        </a>
                      </li>
                      <li>
                        <a href="" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> What is
                          Physical Damage?
                        </a>
                      </li>
                      <li>
                        <a href="" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> How to
                          protect Your device from Physical Damage?
                        </a>
                      </li>
                      <li>
                        <a href="" className="text-foot">
                          <i className="uil uil-angle-right-b me-1"></i> How to
                          protect Your device from Liquid Damage?
                        </a>
                      </li>
                    </ul> */}
                  </div>

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h6 className="footer-head">Newsletter</h6>
                    <p className="mt-4">
                      Sign up and receive the latest tips via email.
                    </p>

                    <div className="subcribe-form footer-subscribe">
                      <form>
                        <input
                          name="email"
                          id="email2"
                          type="email"
                          className="form-control rounded-pill shadow"
                          placeholder="Email :"
                          required
                        />
                        <button
                          type="submit"
                          className="btn btn-pills btn-icon btn-primary"
                        >
                          <i className="uil uil-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-py-30 footer-bar bg-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <div className="text-center">
                  <p className="mb-0 text-foot">
                    © Copyright {new Date().getFullYear()}
                    <a
                      href="http://www.shreethemes.in/"
                      target="_blank"
                      className="text-reset"
                    >
                      . Appzoid by WISH
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
