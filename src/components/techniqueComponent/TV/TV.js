import React, { Component } from "react";
import ImgOne from "./TV images/tv1.jpg";
import ImgTwo from "./TV images/tv2.jpg";
import ImgThree from "./TV images/tv3.jpg";
import ImgFour from "./TV images/tv4.jpg";
import { ProductConsumer } from "./../../../Context";
import { Link } from "react-router-dom";
import ProductWrapper from "./../../ProductWrapper";

export default class TV extends Component {
  state = {
    img: [ImgOne, ImgTwo, ImgThree, ImgFour]
  };
  render() {
    const { id, title, price } = this.props.item;
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
                    src={this.state.img[id - 25]}
                    alt="tv"
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
