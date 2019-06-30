import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import FurnitureList from "./components/furnitureComponents/FurnitureList";
import Technique from "./components/techniqueComponent/Technique";
import Cart from "./components/cart/Cart";
import ShopingCart from "./components/cart/ShopingCartList";
import MobileList from "./components/techniqueComponent/Mobile/MobileList";
import MobileDetails from "./components/techniqueComponent/Mobile/Details";

class App extends Component {
  state = {
    displayHomePage: true
  };
  displayOtherPage = () => {
    this.setState({
      displayHomePage: false
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavbarComponent displayOtherPage={this.displayOtherPage} />

        {this.state.displayHomePage ? (
          <Home />
        ) : (
          <Switch>
            <Route exath path="/home" component={Home} />
            {/*<Route path="/technique" component={Technique} />*/}
            <Route path="/furniture" component={FurnitureList} />
            <Route path="/cart" component={Cart} />
            <Route path="/shopingCart" component={ShopingCart} />
            <Route path="/mobile" component={MobileList} />
            <Route path="/mobileDetails" component={MobileDetails} />
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

export default App;
