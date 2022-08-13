import React, { useEffect } from "react";

const BackToTop = () => {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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
            href="https://1.envato.market/starty"
            target="_blank"
            className="btn btn-icon rounded-circle btn-primary mt-2"
          >
            {" "}
            <i className="uil uil-shopping-cart fs-5"></i>{" "}
          </a>
        </li>
      </ul>
      <a
        href=""
        onclick={topFunction()}
        id="back-to-top"
        className="back-to-top rounded-pill"
      >
        <i className="mdi mdi-arrow-up"></i>
      </a>
    </React.Fragment>
  );
};

export default BackToTop;
