import React, { Component } from "react";
import { ProductConsumer } from "./../../../Context";
import ImgOne from "./images/htc.jpg";
import ImgTwo from "./images/nokia.jpg";
import ImgThree from "./images/iPhone.jpg";
import ImgFour from "./images/huawei.jpg";
import ImgFive from "./images/samsung.jpg";
import ImgSix from "./images/sony.jpg";
import ImgSeven from "./images/motorola.jpg";
import ImgEight from "./images/alcatel.jpg";
import ProductWrapper from "./../../ProductWrapper";
import { Link } from "react-router-dom";

export default class Mobile extends Component {
  state = {
    img: [
      ImgOne,
      ImgTwo,
      ImgThree,
      ImgFour,
      ImgFive,
      ImgSix,
      ImgSeven,
      ImgEight
    ]
  };
  render() {
    const { id, title, company, price, inCart } = this.props.product;

    return (
      <ProductWrapper className="col-12 mx-auto col-md-6 col-lg-3 my-1">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/mobileDetails">
                  <img
                    src={this.state.img[id - 1]}
                    alt="product"
                    className="card-img-top img-fluid"
                  />
                </Link>
                <Link to="/cart">
                  <button
                    className="cart-button"
                    disabled={inCart ? true : false}
                    onClick={() => value.addToCart(id)}
                  >
                    {inCart ? "In Cart" : <i className="fas fa-cart-plus" />}
                  </button>
                </Link>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 text-title">
              {company} {title}
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
