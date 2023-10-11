import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();
  const adminRightSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-light">
          <h1 className="heading-line">Admin Navigation</h1>
        </h4>
        {/* <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-lik text-success">
              Create Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-lik text-success">
              Manage Categories
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-lik text-success">
              Create Product
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-lik text-success">
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-lik text-success">
              Manage Orders
            </Link>
          </li>
        </ul> */}
        <div className="container">
          <div className="row ">
            <div className="col">
              <div className=" admin-button mt-5  ">
                <Link to="/admin/create/category" className=" text-white ">
                  Create Categories
                </Link>
              </div>
            </div>
            <div className="col">
              <div className=" admin-button mt-5  ">
                <Link to="/admin/categories" className=" text-white">
                  Manage Categories
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className=" admin-button  mt-5  ">
                <Link to="/admin/create/product" className=" text-white">
                  Create Product
                </Link>
              </div>
            </div>
            <div className="col">
              <div className=" admin-button mt-5  ">
                <Link to="/admin/products" className=" text-white">
                  Manage Products
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className=" admin-button  mt-5  ">
                <Link to="/admin/orders" className=" text-white">
                  Manage Orders
                </Link>
              </div>
            </div>
            <div className="col">
              <div className=" admin-button mt-5  ">
                <Link to="/admin/orders" className=" text-white">
                  Manage Payments
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1367611853/video/abstract-sound-waves-isolated-on-transparent-background-with-alpha-channel.jpg?s=640x640&k=20&c=nsK8xPU6A-LcY4nH_gieliPlTldZTYhZH_31VK5gQOY="
            alt="bars"
            className="bars"
          />
        </div>
      </div>
    );
  };
  const adminLeftSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header heading-line ">Admin Infomation</h4>
        <img
          src="https://as2.ftcdn.net/v2/jpg/05/32/89/05/1000_F_532890572_bPvj252g0N700t0d9VypUXYXZanUQQv9.jpg"
          className="admin-img-top img-thumbnail "
          alt="testimage"
        />
        <ul className="list-group">
          <li className="list-group-item guarantee">
            <h2>
              <b>Welcome Admin!</b>
            </h2>
          </li>
          <li className="list-group-item">
            <sapn className="badge badge-success mr-2  ">Your Name:</sapn>
            <b className="text-uppercase">{name}</b>
          </li>
          <li className="list-group-item">
            <sapn className="badge badge-success mr-2">Email:</sapn>
            <b>{email}</b>
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger text-uppercase">
              you are in Admin Area
            </span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to admin area "
      description=" Manage all of your products here"
      className=" jumbotron p-3"
    >
      <div className="row">
        <div className="col-4">{adminLeftSide()}</div>
        <div className="col-8">{adminRightSide()}</div>
      </div>
    </Base>
  );
};
export default AdminDashBoard;
