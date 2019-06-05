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
    const { id, title, company, imgOne, price, inCart } = this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
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
                    className="card-img-top"
                  />
                </Link>
                <buttton
                  className="cart-button"
                  disabled={inCart ? true : false}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      incart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </buttton>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
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
