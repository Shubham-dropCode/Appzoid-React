/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import data from "../Data/Content.json";

export default function NavBar() {
  return (
    <>
      <div class="tagline bg-white">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="d-flex align-items-center justify-content-between">
                <ul class="list-unstyled mb-0">
                  <li class="list-inline-item mb-0">
                    <a
                      href={data.WebMailAddress.linkTo}
                      class="text-muted fw-normal"
                    >
                      <i
                        data-feather="mail"
                        class="fea icon-sm text-primary"
                      ></i>
                      <strong>{data.WebMailAddress.title}</strong>
                    </a>
                  </li>
                  <li class="list-inline-item mb-0 ms-3">
                    <a
                      href={data.TopBarContactNumber.linkTo}
                      class="text-muted fw-normal"
                    >
                      <i
                        data-feather="map-pin"
                        class="fea icon-sm text-primary"
                      ></i>
                      <strong>{data.TopBarContactNumber.title}</strong>
                    </a>
                  </li>
                </ul>

                <ul class="list-unstyled social-icon tagline-social mb-0">
                  {data.SocialMediaLinks.map((item, index) => {
                    return (
                      <li class="list-inline-item mb-0" key={index}>
                        <Link to={item.linkTo}>
                          <i class={"uil h6 mb-0 " + item.icon}></i>
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

      <header id="topnav" class="defaultscroll sticky tagline-height bg-light">
        <div class="container">
          <Link class="logo" to="/">
            <img src={data.Logo} alt="logo" />
          </Link>
        </div>
        <div class="menu-extras">
          <div class="menu-item">
            <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <div id="navigation">
          {/* Right alogned mainmenu */}
          <ul class="navigation-menu nav-dark justify-content-end">
            {data.MainMenu.map((menuitem, index) => {
              return (
                <li class="has-submenu parent-parent-menu-item">
                  <Link to={menuitem.linkTo}>{menuitem.title}</Link>
                  <span class="menu-arrow"></span>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
