import React from "react";
import Laptop from "./Laptop";
import { ProductConsumer } from "./../../../Context";

export default function LaptopList() {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.laptopProducts.map(product => (
                  <Laptop key={product.id} product={product} />
                ));
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
