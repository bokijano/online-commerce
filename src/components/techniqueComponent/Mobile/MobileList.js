import React, { Component } from "react";
import Mobile from "./Mobile";
import { ProductConsumer } from "./../../../Context";

export default class MobileList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {value =>
                  value.mobileProducts.map(product => (
                    <Mobile key={product.id} product={product} />
                  ))
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
