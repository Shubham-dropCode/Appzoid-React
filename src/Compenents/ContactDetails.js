import React from "react";

const ContactDetails = () => {
  return (
    <React.Fragment>
      <section class="section pb-0">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card border-0 text-center features feature-clean bg-transparent">
                <div class="icons text-primary text-center mx-auto">
                  <i class="uil uil-phone d-block rounded h3 mb-0"></i>
                </div>
                <div class="content mt-3">
                  <h5 class="footer-head">Phone</h5>
                  <p class="text-muted">
                    Start working with Appzoid that can provide everything
                  </p>
                  <i class="uil uil-whatsapp h5" />
                  <a href="tel:+91 9640462345" class="text-foot">
                    +91 9640462345
                    <br />
                  </a>
                  <i class="uil uil-user h5" />
                  <a href="tel:+91 9052881000" class="text-foot">
                    +91 9052881000
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div class="card border-0 text-center features feature-clean bg-transparent">
                <div class="icons text-primary text-center mx-auto">
                  <i class="uil uil-envelope d-block rounded h3 mb-0"></i>
                </div>
                <div class="content mt-3">
                  <h5 class="footer-head">Email</h5>
                  <p class="text-muted">
                    Start working with Appzoid that can provide everything
                  </p>
                  <a href="mailto:contact@example.com" class="text-foot">
                    support@appzoid.co.in
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div class="card border-0 text-center features feature-clean bg-transparent">
                <div class="icons text-primary text-center mx-auto">
                  <i class="uil uil-map-marker d-block rounded h3 mb-0"></i>
                </div>
                <div class="content mt-3">
                  <h5 class="footer-head">Location</h5>
                  <p class="text-muted">
                    No.905, 9th Floor, Raghav Ratna Towers, Chirag ali lane,
                    Abids, Hyderabad, Telangana – 500001
                  </p>
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1695.9999583990304!2d78.47042201023753!3d17.393010262357777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97632472588f%3A0x7a3346de965e335d!2sRaghava%20Ratna%20Towers%2C%20Fateh%20Maidan%20Lane%2C%20Mahesh%20Nagar%20Colony%2C%20Abids%2C%20Hyderabad%2C%20Telangana%20500001%2C%20India!5e0!3m2!1sen!2ske!4v1604484312177!5m2!1sen!2ske"
                    data-type="iframe"
                    class="video-play-icon text-foot lightbox"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-100 mt-60">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title mb-5 pb-2 text-center">
                <h4 class="title mb-3">Request a Service !</h4>
                <p class="text-muted para-desc mx-auto mb-0">
                  if your need personal assistance, fill the form bellow and we
                  will reply back to your asap!
                </p>
              </div>
              <div class="custom-form">
                <form
                  method="post"
                  name="myForm"
                  id="myForm"
                  onsubmit="return validateForm()"
                >
                  <p id="error-msg" class="mb-0"></p>
                  <div id="simple-msg"></div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">
                          Your Name <span class="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control"
                          placeholder="Name :"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label">
                          Your Email <span class="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          class="form-control"
                          placeholder="Email :"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="mb-3">
                        <label class="form-label">Subject</label>
                        <input
                          name="subject"
                          id="subject"
                          class="form-control"
                          placeholder="Subject :"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="mb-3">
                        <label class="form-label">
                          Message <span class="text-danger">*</span>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows="4"
                          class="form-control"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          class="btn btn-primary"
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

        <div class="container-fluid mt-100 mt-60">
          <div class="row">
            <div class="col-12 p-0">
              <div class="card map border-0">
                <div class="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
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
