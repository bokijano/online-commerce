import React, { Component } from "react";
import ImgOne from "./laptop images/laptop1.jpg";
import ImgTwo from "./laptop images/laptop2.jpg";
import ImgThree from "./laptop images/laptop3.jpg";
import ImgFour from "./laptop images/laptop4.jpg";
import ProductWrapper from "./../../ProductWrapper";
import { ProductConsumer } from "./../../../Context";
import { Link } from "react-router-dom";

export default class Laptop extends Component {
  state = {
    img: [ImgOne, ImgTwo, ImgThree, ImgFour]
  };
  render() {
    const { id, title, price } = this.props.product;
    return (
      <ProductWrapper className="col-12 mx-auto col-md-6 col-lg-6 my-1">
        <div className="card">
          <ProductConsumer>
            {value => (
              <Link to="/techniqueDetails">
                <div
                  id="tech"
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <img
                    src={this.state.img[id - 21]}
                    alt="laptop"
                    className="card-img-top img-fluid"
                  />
                </div>
              </Link>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 text-title">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span> {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
