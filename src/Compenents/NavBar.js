import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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

  function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }

  function activateMenu() {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var immediateParent = getClosest(matchingMenuItem, "li");
        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(matchingMenuItem, ".parent-menu-item");
        if (parent) {
          parent.classList.add("active");
          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }
          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
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
                      <b> WebMail Login</b> ,
                    </a>
                  </li>
                  <li className="list-inline-item mb-0 ms-3">
                    <a href="" className="text-muted fw-normal">
                      <i
                        data-feather="map-pin"
                        className="fea icon-sm text-primary"
                      ></i>{" "}
                      Contact Us: <b>+91-40-40025535</b>
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
          <Link className="logo" to="/">
            <span className="logo-light-mode">
              <img src="./../images/logo.png" className="l-dark" alt="" />
              <img src="./../images/logo.png" className="l-light" alt="" />
            </span>
            {/* <img src="./../images/logo.png" className="logo-dark-mode" alt="" /> */}
          </Link>

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
                <Link to="/">HOME</Link>
                {/* <span className="menu-arrow"></span> */}
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link to="/AboutUs">ABOUT US</Link>
                {/* <span className="menu-arrow"></span> */}
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link to="/OurProducts">OUR PRODUCT</Link>
                {/* <span className="menu-arrow"></span> */}
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link to="/ComingSoon">COMING SOON</Link>
                {/* <span className="menu-arrow"></span> */}
              </li>

              <li>
                <Link to="/ContactUs" className="sub-menu-item">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
