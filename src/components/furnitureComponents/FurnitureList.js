import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class FurnitureList extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          <h2>furniture</h2>
        </ProductConsumer>
      </div>
    );
  }
}
