import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  // setReload = function (f) {return f},
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button onClick={addToCart} className="btn categorybtn  mt-2 mb-2">
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn categorybtn mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div>
      <div className="row category-cards ">
        <div className="col card category-cards-item m-4">
          {getARedirect(redirect)}
          <ImageHelper product={product} />
          <div className="card-body">
            <h5 className="card-title">
              <b> {cartTitle}</b>
              <br />
              <b> Rs. {cartPrice}</b>
            </h5>
            <p className="card-text">{cartDescrption}</p>
          </div>
          <div className="row">
            <div className="col-12 ">{showAddToCart(addtoCart)}</div>
            <div className="col-12 ">{showRemoveFromCart(removeFromCart)}</div>
          </div>
        </div>
      </div>
      {/* <div className="card text-dark bg-light border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
          {getARedirect(redirect)}
          <ImageHelper product={product} />
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescrption}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">
            Rs. {cartPrice}
          </p>
          <div className="row">
            <div className="col-12"></div>
            <div className="col-12"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
