/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import data from "../Data/Content.json";

export default function NavBar() {
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
            {/* <a className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a> */}
          </div>
        </div>

        <div id="navigation">
          {/* Right alogned mainmenu */}
          <ul className="navigation-menu nav-dark justify-content-end">
            {data.MainMenu.map((menuitem, index) => {
              return (
                <li className="has-submenu parent-parent-menu-item" key={index}>
                  <Link to={menuitem.linkTo}>{menuitem.title}</Link>
                  <span className="menu-arrow"></span>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
