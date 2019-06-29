import React, { Component } from "react";
import ImgOne from "./furniture pictures/furniture1.jpg";
import ImgTwo from "./furniture pictures/furniture2.jpg";
import ImgThree from "./furniture pictures/furniture3.jpg";
import ImgFour from "./furniture pictures/furniture4.jpg";
import ImgFive from "./furniture pictures/furniture5.jpg";
import ImgSix from "./furniture pictures/furniture6.jpg";
import ImgSeven from "./furniture pictures/furniture7.jpg";
import ImgEight from "./furniture pictures/furniture8.jpg";
import ImgNine from "./furniture pictures/furniture9.jpg";
import ImgTen from "./furniture pictures/furniture10.jpg";
import ImgEleven from "./furniture pictures/furniture11.jpg";
import ImgTwelve from "./furniture pictures/furniture12.jpg";
import ProductWrapper from "./../ProductWrapper.js";
import { Link } from "react-router-dom";

export default class Furniture extends Component {
  state = {
    images: [
      ImgOne,
      ImgTwo,
      ImgThree,
      ImgFour,
      ImgFive,
      ImgSix,
      ImgSeven,
      ImgEight,
      ImgNine,
      ImgTen,
      ImgEleven,
      ImgTwelve
    ]
  };
  render() {
    const { id, title, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-12 mx-auto col-md-6 col-lg-6 my-3">
        <div className="card">
          <div className="p-4 img-container">
            <img
              src={this.state.images[id - 9]}
              alt="furrnitureProduct"
              className="img-fluid card-img-top"
            />
            <Link to="/cart">
              <button
                className="btn btn-primary btn-display"
                disabled={inCart ? true : false}
                onClick={() => this.props.addToCart(id)}
              >
                {inCart ? "in cart" : "add to cart"}
              </button>
            </Link>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 text-capitalize title-text">
              {title}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span> {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
