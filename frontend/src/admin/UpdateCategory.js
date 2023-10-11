import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import {
  getAllCategories,
  getCategory,
  updateCategory,
} from "./helper/adminapicall";
//TODO:
const UpdateCategory = ({ match }) => {
  const [names, setName] = useState({
    name: "",
    getaRedirect: false,
    formData: "",
  });
  const { name, getaRedirect, formData } = names;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();
  const preload = (categoryId) => {
    getCategory(categoryId).then((data) => {
      //console.log(data);
      if (data.error) {
        setName({ ...names, error: data.error });
      } else {
        perloadCategories();
        setName({
          ...names,
          name: data.name,
          formData: new FormData(),
        });
      }
    });
  };
  const perloadCategories = () => {
    getAllCategories().then((data) => {
      if (data.error) {
        setName({ ...names, error: data.error });
      } else {
        setName({ category: data, formData: new FormData() });
      }
    });
  };
  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handleChange = (value) => (event) => {
    setError("");
    setName(event.target.value);
    formData.set(name, name);
    setName({ ...names, [value]: name });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //backend request fired
    updateCategory(match.params.categoryId, user._id, token, { name }).then(
      (data) => {
        if (data.error) {
          setError(true);
        } else {
          setError("");
          setSuccess(true);
          setName("");
        }
      }
    );
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category updated successfully</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-danger">Failed to update category</h4>;
    }
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Update Category
        </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Update a category here"
      description="Update category "
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
