import React, { useEffect } from "react";
import { Parallax } from "react-parallax";

const NumberCounter = () => {
  useEffect(() => {
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
  }, []);

  return (
    <React.Fragment>
      <Parallax
        className="section bg-primary"
        bgImage="../images/cta04.png"
        style={{ innerHeight: "100%" }}
        strength={-450}
        bgImageSizes="100%"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="counter-box position-relative text-center">
                <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-3">
                  <span className="counter-value" data-target="2750">
                    3
                  </span>
                </h2>
                <span className="counter-head fw-semibold title-dark text-white position-absolute top-50 start-50 translate-middle">
                  HAPPY CUSTOMERS
                </span>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="counter-box position-relative text-center">
                <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-3">
                  <span className="counter-value" data-target="1250">
                    1
                  </span>
                </h2>
                <span className="counter-head fw-semibold title-dark text-white position-absolute top-50 start-50 translate-middle">
                  SMART DEVICES REPAIRED
                </span>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="counter-box position-relative text-center">
                <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-3">
                  <span className="counter-value" data-target="950">
                    0
                  </span>
                </h2>
                <span className="counter-head fw-semibold title-dark text-white position-absolute top-50 start-50 translate-middle">
                  MOBILES REPAIRED
                </span>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="counter-box position-relative text-center">
                <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-3">
                  <span className="counter-value" data-target="450">
                    3
                  </span>
                </h2>
                <span className="counter-head fw-semibold title-dark text-white position-absolute top-50 start-50 translate-middle">
                  OS INSTALLED
                </span>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </React.Fragment>
  );
};

export default NumberCounter;
