import React, { Component } from "react";
import ImgOne from "./laptop.jpg";
import ImgTwo from "./tv.jpg";
import { Link } from "react-router-dom";
import ProductWrapper from "./../ProductWrapper.js";
import ButtonContainer from "./../Button.js";

export default class Technique extends Component {
  render() {
    return (
      <ProductWrapper
        style={{ marginTop: "50px" }}
        className="col-11 mx-auto my-1"
      >
        <div style={{ marginTop: "60px" }} className="container">
          <div className="row">
            <div className="card col-sm-12 col-lg-5 m-4 img-container">
              <img
                style={{
                  width: "80%",
                  marginLeft: "10%",
                  marginRight: "10%",
                  marginTop: "30px"
                }}
                src={ImgOne}
                alt="laptop"
                className="img-fluid card-img-top"
              />
              <Link to="/laptop">
                <ButtonContainer
                  style={{ marginTop: "35px", width: "100%" }}
                  cart
                >
                  Laptops
                </ButtonContainer>
              </Link>
            </div>
            <div className="card col-sm-12 col-lg-5 m-4 img-container">
              <img
                style={{
                  width: "70%",
                  marginLeft: "15%",
                  marginRight: "15%",
                  marginTop: "30px"
                }}
                src={ImgTwo}
                alt="tv"
                className="img-fluid card-img-top"
              />
              <Link to="/tv">
                <ButtonContainer
                  style={{ marginTop: "80px", width: "100%" }}
                  cart
                >
                  TV's
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
