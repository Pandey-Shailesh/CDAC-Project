import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer className=" container">
        <div className="row">
          <div className="col">
            <h2 className="heading-line2 d-inline-flex p-2">Learn And Grow</h2>
            <p className="lead ">
              Ignite your learning journey with our exceptional tutors, ready to
              unleash your full potential .
            </p>
          </div>
          <div className="col">
            <ul>
              <br />
              <br />
              <br />
              <li>Explore</li>
              <li>All Courses</li>
              <li>Article</li>
              <li>Blog</li>
              <li>Sitemap</li>
              <li>Gifts</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <br />
              <br />
              <br />
              <li>About</li>
              <li>Privacy & Policy</li>
              <li>Teams & Conditions</li>
              <li>Support</li>
              <li>Schoolarships</li>
              <li>Exclusive free Classes</li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <footer className="footer bg-light mt-auto py-3">
        <div className="container-fluid bg-success text-dark text-center py-3">
          <h4>If you got any questions , feel free to reach out! </h4>
          <button className="btn btn-warning btn-lg"> contact Us </button>
        </div>
        <div className="container">
          <span className="text-dark">
            An Amazing <span className="text-success">MERN</span> BootCamp
          </span>
        </div>
      </footer> */}
    </div>
  );
};
export default withRouter(Footer);
