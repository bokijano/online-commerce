import React, { Component } from "react";
import Htc from "./images/htc.jpg";
import HtcOne from "./images/htc1.jpg";
import HtcTwo from "./images/htc2.jpg";
import Nokia from "./images/nokia.jpg";
import NokiaOne from "./images/nokia1.jpg";
import NokiaTwo from "./images/nokia2.jpg";
import Apple from "./images/iPhone.jpg";
import AppleOne from "./images/iPhone1.jpg";
import AppleTwo from "./images/iPhone2.jpg";
import Huawei from "./images/huawei.jpg";
import HuaweiOne from "./images/huawei1.jpg";
import HuaweiTwo from "./images/huawei2.jpg";
import Samsung from "./images/samsung.jpg";
import SamsungOne from "./images/samsung1.jpg";
import SamsungTwo from "./images/samsung2.jpg";
import Sony from "./images/sony.jpg";
import SonyOne from "./images/sony1.jpg";
import SonyTwo from "./images/sony2.jpg";
import Motorola from "./images/motorola.jpg";
import MotorolaOne from "./images/motorola1.jpg";
import MotorolaTwo from "./images/motorola2.jpg";
import Alcatel from "./images/alcatel.jpg";
import AlcatelOne from "./images/alcatel1.jpg";
import AlcatelTwo from "./images/alcatel2.jpg";
import { ProductConsumer } from "./../../../Context";
import ButtonContainer from "./../../Button";
import { Link } from "react-router-dom";

export default class MobileDetails extends Component {
  state = {
    img: [Htc, Nokia, Apple, Huawei, Samsung, Sony, Motorola, Alcatel],
    imgOne: [
      HtcOne,
      NokiaOne,
      AppleOne,
      HuaweiOne,
      SamsungOne,
      SonyOne,
      MotorolaOne,
      AlcatelOne
    ],
    imgTwo: [
      HtcTwo,
      NokiaTwo,
      AppleTwo,
      HuaweiTwo,
      SamsungTwo,
      SonyTwo,
      MotorolaTwo,
      AlcatelTwo
    ]
  };
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            company,
            price,
            info,
            inCart
          } = value.mobileDetails;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1 className="font-heading">
                    {company} {title}
                  </h1>
                </div>
              </div>
              {/* end of title */}

              {/* mobile product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 text-capitalize">
                  <div className="col-10 mx-auto my-3">
                    <img
                      style={{ width: "200px" }}
                      src={this.state.img[id - 1]}
                      alt="first"
                      className="img-fluid main-img"
                    />
                  </div>
                  <div className="row">
                    <div className="col-xs-6 mx-auto my-3">
                      <img
                        style={{ width: "100px" }}
                        src={this.state.imgOne[id - 1]}
                        alt="second"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-xs-6 mx-auto my-3">
                      <img
                        style={{ width: "100px" }}
                        src={this.state.imgTwo[id - 1]}
                        alt="second"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>

                {/* end of mobile info */}

                {/* mobile text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3 className="font-headingTwo">model: {title}</h3>
                  <h4 className="text-title text-muted text-uppercase mt-3 mb-2">
                    made by: {company}
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <ul
                    className="font-detailsThree"
                    style={{ listStyleType: "none", fontWeight: "bolder" }}
                  >
                    <li>{info[0]}</li>
                    <li>{info[1]}</li>
                    <li>{info[2]}</li>
                    <li>{info[3]}</li>
                  </ul>
                  {/* end of mobile text */}
                  {/* buttons */}
                  <Link to="/mobile">
                    <ButtonContainer>back to mobile devices</ButtonContainer>
                  </Link>
                  <Link to="/cart">
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => value.addToCart(id)}
                    >
                      {inCart ? "device is in cart" : "add to cart"}
                    </ButtonContainer>
                  </Link>
                  {/* end of buttons */}
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
