import React from "react";

const Testimonial = () => {
  //   if (document.getElementsByClassName("tiny-three-item").length > 0) {
  //     var slider = tns({
  //       container: ".tiny-three-item",
  //       controls: false,
  //       mouseDrag: true,
  //       loop: true,
  //       rewind: true,
  //       autoplay: true,
  //       autoplayButtonOutput: false,
  //       autoplayTimeout: 3000,
  //       navPosition: "bottom",
  //       speed: 400,
  //       gutter: 12,
  //       responsive: {
  //         992: {
  //           items: 3,
  //         },

  //         767: {
  //           items: 2,
  //         },

  //         320: {
  //           items: 1,
  //         },
  //       },
  //     });
  //   }
  return (
    <React.Fragment>
      <section className="section">
        <div class="container mt-60 pt-0">
          <div className="row justify-content-center mb-4">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-3">Steps to Start Partnership</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Our design projects are fresh and simple and will benefit your
                  business greatly. Learn more about our work!
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="tiny-three-item">
                <div class="tiny-slide">
                  <div class="card border-0 text-center">
                    <div class="card-body">
                      <img
                        src="images/client/01.jpg"
                        class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                        alt=""
                      />
                      <p class="text-muted mt-4">
                        " It seems that only fragments of the original text
                        remain in the Lorem Ipsum texts used today. "
                      </p>
                      <h6 class="text-primary">- Thomas Israel</h6>
                    </div>
                  </div>
                </div>

                <div class="tiny-slide">
                  <div class="card border-0 text-center">
                    <div class="card-body">
                      <img
                        src="images/client/02.jpg"
                        class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                        alt=""
                      />
                      <p class="text-muted mt-4">
                        " The most well-known dummy text is the 'Lorem Ipsum',
                        which is said to have originated in the 16th century. "
                      </p>
                      <h6 class="text-primary">- Carl Oliver</h6>
                    </div>
                  </div>
                </div>

                <div class="tiny-slide">
                  <div class="card border-0 text-center">
                    <div class="card-body">
                      <img
                        src="images/client/03.jpg"
                        class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                        alt=""
                      />
                      <p class="text-muted mt-4">
                        " One disadvantage of Lorum Ipsum is that in Latin
                        certain letters appear more frequently than others. "
                      </p>
                      <h6 class="text-primary">- Barbara McIntosh</h6>
                    </div>
                  </div>
                </div>

                <div class="tiny-slide">
                  <div class="card border-0 text-center">
                    <div class="card-body">
                      <img
                        src="images/client/04.jpg"
                        class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                        alt=""
                      />
                      <p class="text-muted mt-4">
                        " Thus, Lorem Ipsum has only limited suitability as a
                        visual filler for German texts. "
                      </p>
                      <h6 class="text-primary">- Jill Webb</h6>
                    </div>
                  </div>
                </div>

                <div class="tiny-slide">
                  <div class="card border-0 text-center">
                    <div class="card-body">
                      <img
                        src="images/client/05.jpg"
                        class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                        alt=""
                      />
                      <p class="text-muted mt-4">
                        " There is now an abundance of readable dummy texts.
                        These are usually used when a text is required. "
                      </p>
                      <h6 class="text-primary">- Dean Tolle</h6>
                    </div>
                  </div>
                </div>

                <div class="tiny-slide">
                  <div class="card border-0 text-center">
                    <div class="card-body">
                      <img
                        src="images/client/06.jpg"
                        class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                        alt=""
                      />
                      <p class="text-muted mt-4">
                        " According to most sources, Lorum Ipsum can be traced
                        back to a text composed by Cicero. "
                      </p>
                      <h6 class="text-primary">- Christa Smith</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Testimonial;
