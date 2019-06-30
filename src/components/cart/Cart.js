import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "./../../Context.js";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import ShopingCartList from "./ShopingCartList";

export default class Cart extends Component {
  render() {
    return (
      <section className="shop-cart">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h1
                    style={{
                      textAlign: "center",
                      paddingBottom: "35px",
                      boxShadow: "5px 5px 10px lightGrey"
                    }}
                    className="text-title"
                  >
                    Your shoping cart
                  </h1>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                  {/*{value.shopingCart ? <ShopingCartList value={value} /> : null}*/}
                  {value.shopingCart ? <ShopingCartList value={value} /> : null}
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
