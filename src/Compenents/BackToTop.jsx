/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

const BackToTop = () => {

  const [showTopBtn, setShowTopBtn] = useState(false);

  const topFunction = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  return (
    <React.Fragment>
      <ul
        className="text-center list-unstyled switcher-button mb-0 position-fixed"
      // style="{{top: 20%; left: 10px; z-index: 2;}}"
      >
        <li className="d-grid">
          <a
            href=""
            className="btn btn-icon rounded-circle btn-dark dark-version t-dark"
          // onclick="setTheme('style-dark')"
          >
            {" "}
            <i className="uil uil-moon fs-5"></i>{" "}
          </a>
        </li>
        <li className="d-grid">
          <a
            href=""
            className="btn btn-icon rounded-circle btn-dark light-version t-light"
          // onclick="setTheme('style')"
          >
            {" "}
            <i className="uil uil-sun fs-5"></i>{" "}
          </a>
        </li>
        <li className="d-grid">
          <a
            href="/"
            target="_blank"
            className="btn btn-icon rounded-circle btn-primary mt-2"
            rel="noreferrer"
          >
            <i className="uil uil-shopping-cart fs-5"></i>{" "}
          </a>
        </li>
      </ul>
      <a
        href=""
        onClick={() => topFunction()}
        id="back-to-top"
        className="back-to-top rounded-pill"
      >
        <i class="las la-arrow-up"></i>
      </a>
    </React.Fragment>
  );
};

export default BackToTop;
