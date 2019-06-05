import React, { Component } from "react";
import storeProducts from "./components/techniqueComponent/Mobile/data";
import detailProduct from "./components/techniqueComponent/Mobile/detailsMobile";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    mobileProducts: [],
    mobileDetails: detailProduct
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

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
