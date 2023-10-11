import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in SignUp"));
  };

  const signUpForm = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col signup-image ">
            <img
              src="https://i.pinimg.com/originals/02/fc/da/02fcda11cbfb2a84537f9d059b4c81b2.gif"
              alt="signup-banner"
              className="signup-banner"
            />
          </div>
          <div className="col signup-content">
            <div>
              <h2 className="heading-line d-inline-flex p-2">Get Start Now</h2>
              <h5 className="guarantee">
                <b>
                  Enter Email address and choose strong Password to continue
                </b>
              </h5>
            </div>
            <form>
              <div className="form-group">
                <label className="">Name</label>
                <input
                  className="form-control"
                  onChange={handleChange("name")}
                  type="text"
                  value={name}
                />
              </div>
              <div className="form-group">
                <label className="">Email</label>
                <input
                  className="form-control"
                  onChange={handleChange("email")}
                  type="email"
                  value={email}
                />
              </div>

              <div className="form-group">
                <label className="">Password</label>
                <input
                  className="form-control"
                  onChange={handleChange("password")}
                  type="password"
                  value={password}
                />
              </div>
              <button
                onClick={onSubmit}
                className="btn btn-success btn-lg btn-block categorybtn"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      // <div className="row">
      //   <div className="col-md-6 offset-sm-3 text-left">
      //     <form>
      //       <div className="form-group">
      //         <label className="text-light">Name</label>
      //         <input
      //           className="form-control"
      //           onChange={handleChange("name")}
      //           type="text"
      //           value={name}
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label className="text-light">Email</label>
      //         <input
      //           className="form-control"
      //           onChange={handleChange("email")}
      //           type="email"
      //           value={email}
      //         />
      //       </div>

      //       <div className="form-group">
      //         <label className="text-light">Password</label>
      //         <input
      //           className="form-control"
      //           onChange={handleChange("password")}
      //           type="password"
      //           value={password}
      //         />
      //       </div>
      //       <button
      //         onClick={onSubmit}
      //         className="btn btn-success btn-lg btn-block"
      //       >
      //         Submit
      //       </button>
      //     </form>
      //   </div>
      // </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success
            "
            style={{
              display: success ? "" : "none",
            }}
          >
            <b>New account was created Successfully. Please </b>
            <Link to="/signin">
              <b>Login Here</b>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{
              display: error ? "" : "none",
            }}
          >
            <b> {error}</b>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign up page" description="A page for user to sign up!">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signup;
