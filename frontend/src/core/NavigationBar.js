import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#7952b3" };
  } else {
    return { color: "#000000" };
  }
};

const NavigationBar = ({ history }) => (
  <div>
    <nav className="navbar navbar-light ">
      <h1 className="logo-img">
        <b> &nbsp;&nbsp; L&G &nbsp;</b>
      </h1>
      <ul className="nav nav-tabs  d-flex flex-row ">
        <li className="nav-item">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/AboutUs")}
            className="nav-link"
            id="AboutUs"
            to="/"
          >
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/Category")}
            className="nav-link"
            id="Category"
            to="/"
          >
            Category
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/Testimonial")}
            className="nav-link"
            id="Testimonial"
            to="/"
          >
            Testimonial
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/ContactUs")}
            className="nav-link"
            id="ContactUs"
            to="/"
          >
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              u. Dashboard
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              A. Dashboard
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
                Sign In
              </Link>
            </li>
          </Fragment>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </nav>
  </div>
);

export default withRouter(NavigationBar);
