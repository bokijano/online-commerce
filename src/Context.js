import React, { Component } from "react";
import storeProducts from "./components/techniqueComponent/Mobile/data";
import detailProduct from "./components/techniqueComponent/Mobile/detailsMobile";
import storeLaptop from "./components/techniqueComponent/Laptop/LaptopData";
import storeTV from "./components/techniqueComponent/TV/TVData";
import storeFurniture from "./components/furnitureComponents/furnitureData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    mobileProducts: [],
    mobileDetails: detailProduct,
    furnitureProducts: [],
    laptopProducts: [],
    tvProducts: [],
    cart: [],
    cartTotal: 0,
    shopingCart: false
  };
  componentDidMount() {
    this.setMobile();
    this.setFurniture();
    this.setLaptop();
    this.setTV();
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
  setLaptop = () => {
    let tempLaptop = [];
    storeLaptop.forEach(item => {
      const singleItem = { ...item };
      tempLaptop = [...tempLaptop, singleItem];
    });
    this.setState({
      laptopProducts: tempLaptop
    });
  };
  setTV = () => {
    let tempTV = [];
    storeTV.forEach(item => {
      const singleItem = { ...item };
      tempTV = [...tempTV, singleItem];
    });
    this.setState({
      tvProducts: tempTV
    });
  };

  getItem = id => {
    const allProducts = this.state.mobileProducts
      .concat(this.state.furnitureProducts)
      .concat(this.state.laptopProducts)
      .concat(this.state.tvProducts);
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
    let tempLaptop = [...this.state.laptopProducts];
    let tempTV = [...this.state.tvProducts];

    let tempAll = tempProducts
      .concat(tempFurniture)
      .concat(tempLaptop)
      .concat(tempTV);

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
    let tempFurniture = [...this.state.furnitureProducts];
    let tempLaptop = [...this.state.laptopProducts];
    let tempTV = [...this.state.tvProducts];

    let tempAll = tempProducts
      .concat(tempFurniture)
      .concat(tempLaptop)
      .concat(tempTV);

    const index = tempAll.indexOf(this.getItem(id));
    let removedProduct = tempAll[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      {
        cart: [...removeItem],
        mobileProducts: [...tempProducts],
        furnitureProducts: [...tempFurniture],
        laptopProducts: [...tempLaptop],
        tvProducts: [...tempTV]
      },
      () => this.addTotals()
    );
  };
  clearCart = () => {
    this.setState(
      {
        cart: [],
        furnitureProducts: storeFurniture,
        shopingCart: false
      },
      this.setMobile(),
      this.setFurniture(),
      () => this.addTotals()
    );
  };
  addTotals = () => {
    let cartTotal = 0;

    this.state.cart.map(item => {
      return (cartTotal += item.total);
    });

    let total = cartTotal;

    this.setState({
      cartTotal: total
    });
  };
  buyProducts = () => {
    this.setState({
      shopingCart: true
    });
  };
  closeBuyCart = () => {
    this.setState({
      shopingCart: false,
      cart: [],
      furnitureProducts: storeFurniture,
      mobileProduct: storeProducts
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
          clearCart: this.clearCart,
          cartDetails: this.cartDetails,
          buyProducts: this.buyProducts,
          closeBuyCart: this.closeBuyCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
