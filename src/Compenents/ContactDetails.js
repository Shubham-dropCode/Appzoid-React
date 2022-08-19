import React from "react";

const ContactDetails = (props) => {
  return (
    <React.Fragment>
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 text-center features feature-clean bg-transparent">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                </div>
                <div className="content mt-3">
                  <h5 className="footer-head">Phone</h5>
                  <p className="text-muted">
                    Start working with Appzoid that can provide everything
                  </p>
                  <i className="uil uil-whatsapp h5" />
                  <a href="tel:`{props.PhoneWhatsapp}`" className="text-foot">
                    {props.ContactPhoneWhatsapp}
                    <br />
                  </a>
                  <i className="uil uil-user h5" />

                  <a href="tel:`{props.PhoneUser}`" className="text-foot">
                    {props.PhoneUser}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-clean bg-transparent">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                </div>
                <div className="content mt-3">
                  <h5 className="footer-head">Email</h5>
                  <p className="text-muted">
                    Start working with Appzoid that can provide everything
                  </p>
                  <a href="mailto:contact@example.com" className="text-foot">
                    {props.Email}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="card border-0 text-center features feature-clean bg-transparent">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                </div>
                <div className="content mt-3">
                  <h5 className="footer-head">Location</h5>
                  <p className="text-muted">{props.Address}</p>
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1695.9999583990304!2d78.47042201023753!3d17.393010262357777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97632472588f%3A0x7a3346de965e335d!2sRaghava%20Ratna%20Towers%2C%20Fateh%20Maidan%20Lane%2C%20Mahesh%20Nagar%20Colony%2C%20Abids%2C%20Hyderabad%2C%20Telangana%20500001%2C%20India!5e0!3m2!1sen!2ske!4v1604484312177!5m2!1sen!2ske"
                    data-type="iframe"
                    className="video-play-icon text-foot lightbox"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title mb-5 pb-2 text-center">
                <h4 className="title mb-3">Request a Service !</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  if your need personal assistance, fill the form bellow and we
                  will reply back to your asap!
                </p>
              </div>
              <div className="custom-form">
                <form
                  method="post"
                  name="myForm"
                  id="myForm"
                  onsubmit="return validateForm()"
                >
                  <p id="error-msg" className="mb-0"></p>
                  <div id="simple-msg"></div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Name :"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder="Subject :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-100 mt-60">
          <div className="row">
            <div className="col-12 p-0">
              <div className="card map border-0">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1695.9999583990304!2d78.47042201023753!3d17.393010262357777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97632472588f%3A0x7a3346de965e335d!2sRaghava%20Ratna%20Towers%2C%20Fateh%20Maidan%20Lane%2C%20Mahesh%20Nagar%20Colony%2C%20Abids%2C%20Hyderabad%2C%20Telangana%20500001%2C%20India!5e0!3m2!1sen!2ske!4v1604484312177!5m2!1sen!2ske"
                    // style="border:0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactDetails;
