/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../Data/Content.json";

export default function NavBar() {
  function toggleMenu() {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  }

  useEffect(() => {
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
            var matches = (
                this.document || this.ownerDocument
              ).querySelectorAll(s),
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

    // Clickable Menu
    if (document.getElementById("navigation")) {
      var elements = document
        .getElementById("navigation")
        .getElementsByTagName("a");
      for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].onclick = function (elem) {
          if (elem.target.getAttribute("href") === "javascript:void(0)") {
            var submenu = elem.target.nextElementSibling.nextElementSibling;
            submenu.classList.toggle("open");
          }
        };
      }
    }

    // Menu sticky
    function windowScroll() {
      const navbar = document.getElementById("topnav");
      if (navbar != null) {
        if (
          document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
        ) {
          navbar.classList.add("nav-sticky");
        } else {
          navbar.classList.remove("nav-sticky");
        }
      }
    }

    window.addEventListener("scroll", (ev) => {
      ev.preventDefault();
      windowScroll();
    });

    // back-to-top
    var mybutton = document.getElementById("back-to-top");
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (mybutton != null) {
        if (
          document.body.scrollTop > 500 ||
          document.documentElement.scrollTop > 500
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    }

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, []);

  return (
    <>
      <div className="tagline bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item mb-0">
                    <a
                      href={data.WebMailAddress.linkTo}
                      className="text-muted fw-normal"
                    >
                      <i
                        data-feather="mail"
                        className="fea icon-sm text-primary"
                      ></i>
                      <strong>{data.WebMailAddress.title}</strong>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0 ms-3">
                    <a
                      href={data.TopBarContactNumber.linkTo}
                      className="text-muted fw-normal"
                    >
                      <i
                        data-feather="map-pin"
                        className="fea icon-sm text-primary"
                      ></i>
                      <strong>{data.TopBarContactNumber.title}</strong>
                    </a>
                  </li>
                </ul>

                <ul className="list-unstyled social-icon tagline-social mb-0">
                  {data.SocialMediaLinks.map((item, index) => {
                    return (
                      <li className="list-inline-item mb-0" key={index}>
                        <Link to={item.linkTo}>
                          <i className={"uil h6 mb-0 " + item.icon}></i>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        id="topnav"
        className="defaultscroll sticky tagline-height bg-light"
      >
        <div className="container">
          <Link className="logo" to="/">
            <img src={data.Logo} alt="logo" />
          </Link>
        </div>
        <div className="menu-extras">
          <div className="menu-item">
            <a
              className="navbar-toggle"
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <div id="navigation">
          {/* Right alogned mainmenu */}
          <ul className="navigation-menu nav-dark justify-content-end">
            {data.MainMenu.map((menuitem, index) => {
              return (
                <li className="has-submenu parent-parent-menu-item" key={index}>
                  <Link to={menuitem.linkTo}>{menuitem.title}</Link>
                  {/* <span className="menu-arrow"></span> */}
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
