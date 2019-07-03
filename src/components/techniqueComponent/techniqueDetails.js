import React, { Component } from "react";
import Laptop1 from "./Laptop/laptop images/laptop1.jpg";
import Laptop11 from "./Laptop/laptop images/laptop11.jpg";
import Laptop12 from "./Laptop/laptop images/laptop12.jpg";
import Laptop2 from "./Laptop/laptop images/laptop2.jpg";
import Laptop21 from "./Laptop/laptop images/laptop21.jpg";
import Laptop22 from "./Laptop/laptop images/laptop22.jpg";
import Laptop3 from "./Laptop/laptop images/laptop3.jpg";
import Laptop31 from "./Laptop/laptop images/laptop31.jpg";
import Laptop32 from "./Laptop/laptop images/laptop32.jpg";
import Laptop4 from "./Laptop/laptop images/laptop4.jpg";
import Laptop41 from "./Laptop/laptop images/laptop41.jpg";
import Laptop42 from "./Laptop/laptop images/laptop42.jpg";

import tv1 from "./TV/TV images/tv1.jpg";
import tv11 from "./TV/TV images/tv11.jpg";
import tv12 from "./TV/TV images/tv12.jpg";
import tv2 from "./TV/TV images/tv2.jpg";
import tv21 from "./TV/TV images/tv21.jpg";
import tv22 from "./TV/TV images/tv22.jpg";
import tv3 from "./TV/TV images/tv3.jpg";
import tv31 from "./TV/TV images/tv31.jpg";
import tv32 from "./TV/TV images/tv32.jpg";
import tv4 from "./TV/TV images/tv4.jpg";
import tv41 from "./TV/TV images/tv41.jpg";
import tv42 from "./TV/TV images/tv42.jpg";

import { Link } from "react-router-dom";
import { ProductConsumer } from "./../../Context";
import ButtonContainer from "./../Button";

export default class techniqueDetails extends Component {
  state = {
    img: [Laptop1, Laptop2, Laptop3, Laptop4, tv1, tv2, tv3, tv4],
    imgOne: [Laptop11, Laptop21, Laptop31, Laptop41, tv11, tv21, tv31, tv41],
    imgTwo: [Laptop12, Laptop22, Laptop32, Laptop42, tv12, tv22, tv32, tv42]
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
            <div style={{ marginTop: "60px" }} className="container py-5">
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
                      src={this.state.img[id - 21]}
                      alt="first"
                      className="img-fluid main-img"
                    />
                  </div>
                  <div className="row">
                    <div className="col-xs-6 mx-auto my-3">
                      <img
                        style={{ width: "100px" }}
                        src={this.state.imgOne[id - 21]}
                        alt="second"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-xs-6 mx-auto my-3">
                      <img
                        style={{ width: "100px" }}
                        src={this.state.imgTwo[id - 21]}
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
                  <Link to="/technique">
                    <ButtonContainer>back to technique</ButtonContainer>
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
