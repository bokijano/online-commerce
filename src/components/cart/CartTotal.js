import React from "react";
import ButtonContainer from "./../Button.js";
import { Link } from "react-router-dom";

export default function CartTotal({ value }) {
  const { cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <h5 style={{ marginTop: "20px !important" }}>
            <span className="text-title">total: </span>
            <strong>$ { cartTotal }</strong>
          </h5>
          <Link to="/home">
            <ButtonContainer
             onClick={clearCart}
             style={{ marginTop: "40px" }} cart>
              clear cart
            </ButtonContainer>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
