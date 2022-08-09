import React from "react";

const NumberCounter = () => {
  try {
    const counter = document.querySelectorAll(".counter-value");
    const speed = 2500; // The lower the slower

    counter.forEach((counter_value) => {
      const updateCount = () => {
        const target = +counter_value.getAttribute("data-target");
        const count = +counter_value.innerText;

        // Lower inc to slow and higher to slow
        var inc = target / speed;

        if (inc < 1) {
          inc = 1;
        }

        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter_value
          counter_value.innerText = (count + inc).toFixed(0);
          // Call function every ms
          setTimeout(updateCount, 1);
        } else {
          counter_value.innerText = target;
        }
      };

      updateCount();
    });
  } catch (err) {}
  return (
    <React.Fragment>
      <section
        className="section bg-primary"
        data-jarallax='{"speed": 0.5}'
        // style={{ backgroundImage: "url(" + "../images/bg/bh3.jpg" + ")" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="counter-box position-relative text-center">
                <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-3">
                  <span className="counter-value" data-target="5458">
                    3
                  </span>
                </h2>
                <span className="counter-head fw-semibold title-dark text-white position-absolute top-50 start-50 translate-middle">
                  Investment Projects
                </span>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="counter-box position-relative text-center">
                <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-3">
                  <span className="counter-value" data-target="9522">
                    1
                  </span>
                </h2>
                <span className="counter-head fw-semibold title-dark text-white position-absolute top-50 start-50 translate-middle">
                  Years of Experience
                </span>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="counter-box position-relative text-center">
                <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-3">
                  <span className="counter-value" data-target="6431">
                    0
                  </span>
                </h2>
                <span className="counter-head fw-semibold title-dark text-white position-absolute top-50 start-50 translate-middle">
                  Offices in the World
                </span>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="counter-box position-relative text-center">
                <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-3">
                  <span className="counter-value" data-target="852">
                    3
                  </span>
                </h2>
                <span className="counter-head fw-semibold title-dark text-white position-absolute top-50 start-50 translate-middle">
                  Successful Cases
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NumberCounter;
