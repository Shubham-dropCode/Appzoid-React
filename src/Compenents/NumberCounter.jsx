import React, { useEffect } from "react";
import { Parallax } from "react-parallax";

const NumberCounter = ({ CounterNumber = [] }) => {
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
        className="section bg-primary "
        // bgImage={props.imgSrc}
        style={{ innerHeight: "100%" }}
        strength={-450}
        bgImageSizes="100%"
      >
        <div className="container">
          <div className="row">
            {CounterNumber.map((number) => {
              return (
                <div className="col-md-3 col-6">
                  <div className="counter-box position-relative px-2 text-center">
                    <i
                      className={
                        "display-4 text-white opacity-8 " + number.icon
                      }
                    ></i>
                    <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-8">
                      <span
                        className="counter-value"
                        data-target={number.dataTarget}
                      >
                        3
                      </span>
                    </h2>
                    <span className="counter-head fw-semibold title-dark text-white opacity-8">
                      <h5>{number.counterTitle}</h5>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Parallax>
    </React.Fragment>
  );
};

export default NumberCounter;
