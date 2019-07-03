import React from "react";
import TV from "./TV";
import { ProductConsumer } from "./../../../Context";

export default function TVList() {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <ProductConsumer>
              {value =>
                value.tvProducts.map(item => <TV key={item.id} item={item} />)
              }
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
