import React, { Component } from "react";
import storeProducts from "./components/techniqueComponent/Mobile/data";
import detailProduct from "./components/techniqueComponent/Mobile/detailsMobile";
import storeFurniture from "./components/furnitureComponents/furnitureData.js";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    mobileProducts: [],
    mobileDetails: detailProduct,
    furnitureProducts: [],
    cart: [],
    cartTotal: 0
  };
  componentDidMount() {
    this.setMobile();
    this.setFurniture();
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
  setFurniture = () => {
    let tempFurniture = [];
    storeFurniture.forEach(item => {
      const singleItem = { ...item };
      tempFurniture = [...tempFurniture, singleItem];
    });
    this.setState({
      furnitureProducts: tempFurniture
    });
  };

  getItem = id => {
    const allProducts = this.state.mobileProducts.concat(
      this.state.furnitureProducts
    );
    const products = allProducts.find(product => product.id === id);
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
    let tempFurniture = [...this.state.furnitureProducts];

    let tempAll = tempProducts.concat(tempFurniture);

    const index = tempAll.indexOf(this.getItem(id));

    const product = tempAll[index];
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
  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => this.setMobile(),
      () => this.setFurniture(),
      () => this.addTotals()
    );
  };
  addTotals = () => {
    let cartTotal = 0;

    this.state.cart.map(item => {
      cartTotal += item.total;
    });

    let total = cartTotal;

    this.setState({
      cartTotal: total
    });
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
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
