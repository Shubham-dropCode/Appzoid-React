import React from "react";

const NavBar = () => {
  function toggleMenu() {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  }

  return (
    <React.Fragment>
      <div className="tagline bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item mb-0">
                    <a href="" className="text-muted fw-normal">
                      <i
                        data-feather="mail"
                        className="fea icon-sm text-primary"
                      ></i>{" "}
                      support@starty.com
                    </a>
                  </li>
                  <li className="list-inline-item mb-0 ms-3">
                    <a href="" className="text-muted fw-normal">
                      <i
                        data-feather="map-pin"
                        className="fea icon-sm text-primary"
                      ></i>{" "}
                      4432 Pick Street Denver, CO 80203
                    </a>
                  </li>
                </ul>

                <ul className="list-unstyled social-icon tagline-social mb-0">
                  <li className="list-inline-item mb-0">
                    <a href="">
                      <i className="uil uil-facebook-f h6 mb-0"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a href="">
                      <i className="uil uil-instagram h6 mb-0"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a href="">
                      <i className="uil uil-twitter h6 mb-0"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a href="">
                      <i className="uil uil-linkedin h6 mb-0"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="topnav" className="defaultscroll sticky tagline-height">
        <div className="container">
          <a className="logo" href="index.html">
            <span className="logo-light-mode">
              <img src="./../images/logo.png" className="l-dark" alt="" />
              <img src="./../images/logo.png" className="l-light" alt="" />
            </span>
            {/* <img src="./../images/logo.png" className="logo-dark-mode" alt="" /> */}
          </a>

          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item search-icon mb-0">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-link text-decoration-none dropdown-toggle mb-0 p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="uil uil-search h5 text-dark nav-light-icon-dark mb-0"></i>
                  <i className="uil uil-search h5 text-white nav-light-icon-white mb-0"></i>
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-4 py-0"
                  style={{ width: 300 }}
                >
                  <form className="p-4">
                    <input
                      type="text"
                      id="text"
                      name="name"
                      className="form-control border bg-white"
                      placeholder="Search..."
                    />
                  </form>
                </div>
              </div>
            </li>
          </ul>

          <div id="navigation">
            <ul className="navigation-menu nav-right nav-light">
              <li className="has-submenu parent-parent-menu-item">
                <a href="">HOME</a>
                <span className="menu-arrow"></span>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a href="">ABOUT US</a>
                <span className="menu-arrow"></span>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a href="">OUR PRODUCT</a>
                <span className="menu-arrow"></span>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a href="">COMING SOON</a>
                <span className="menu-arrow"></span>
              </li>

              <li>
                <a href="page-contact.html" className="sub-menu-item">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
