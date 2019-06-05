import React, { Component } from "react";
import OnlineShop from "./onlineShoping.jpg";
import { ProductConsumer } from "./Context.js";

export default class Home extends Component {
  render() {
    return (
      <div className="container shop-item">
        <ProductConsumer>
          <img src={OnlineShop} alt="online shop" className="img-fluid" />
          <div className="font-headingThree head-texts">
            <h2 style={{ textShadow: "5px 5px 10px" }}>
              The best store for you! Buy online!
            </h2>
            <h4 style={{ marginLeft: "30px" }}>Furniture</h4>
            <h4 style={{ marginLeft: "60px" }}>Mobile phones</h4>
            <h4 style={{ marginLeft: "90px" }}>TVs</h4>
            <h4 style={{ marginLeft: "120px" }}>Laptops</h4>
          </div>
        </ProductConsumer>
      </div>
    );
  }
}
