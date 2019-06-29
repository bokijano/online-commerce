import React, { Component } from "react";
import Furniture from "./Furniture";
import { ProductConsumer } from "./../../Context.js";

export default class FurnitureList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.furnitureProducts.map(product => {
                    return (
                      <Furniture
                        key={product.key}
                        product={product}
                        addToCart={value.addToCart}
                      />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
