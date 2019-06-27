import React, { Component } from "react";
import storeProducts from "./components/techniqueComponent/Mobile/data";
import detailProduct from "./components/techniqueComponent/Mobile/detailsMobile";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    mobileProducts: [],
    mobileDetails: detailProduct,
    cart: []
  };
  componentDidMount() {
    this.setMobile();
  }
  setMobile = () => {
    let tempMobile = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempMobile = [...tempMobile, singleItem];
    });
    this.setState({
      mobileProducts: tempMobile
    });
  };

  getItem = id => {
    const products = this.state.mobileProducts.find(
      product => product.id === id
    );
    return products;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({
      mobileDetails: product
    });
  };
  addToCart = id => {
    let tempProducts = [...this.state.mobileProducts];
    const index = tempProducts.indexOf(this.getItem(id));

    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;

    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { product: tempProducts, cart: [...this.state.cart, product] };
      },
      () => this.addTotals()
    );
  };
  increment = id => {
    let cartCount = [...this.state.cart];

    const index = cartCount.indexOf(this.getItem(id));
    const product = cartCount[index];

    product.count = product.count + 1;
    product.total = product.price * product.count;

    this.setState(
      {
        cart: [...cartCount]
      },
      () => this.addTotals()
    );
  };
  decrement = id => {
    let cartCount = [...this.state.cart];

    const index = cartCount.indexOf(this.getItem(id));
    const product = cartCount[index];

    product.count = product.count - 1;
    product.count === 0
      ? this.increment(id)
      : (product.total = product.count * product.price);

    this.setState(
      {
        cart: [...cartCount]
      },
      () => this.addTotals(id)
    );
  };
  removeItem = id => {
    let removeItem = [...this.state.cart];
    removeItem = this.state.cart.filter(item => item.id !== id);

    let tempProducts = [...this.state.mobileProducts];
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      {
        cart: [...removeItem],
        mobileProducts: [...tempProducts]
      },
      () => this.addTotals()
    );
  };
  addTotals = () => {
    console.log("add totals value");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
