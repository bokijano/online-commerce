import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonContainer from "./Button";
import Phone from "./../phone.svg";

export default class NavbarComponent extends Component {
  render() {
    const { displayOtherPage } = this.props;
    return (
      <NavbarWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5 fixed-top">
        <Link to="/home">
          <img src={Phone} alt="brand phone" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-i">
          <li className="nav-item ml-5">
            <Link
              onClick={displayOtherPage}
              to="/furniture"
              className="nav-link"
            >
              furniture
            </Link>
          </li>

          <li className="nav-item ml-5">
            <Link
              onClick={displayOtherPage}
              to="/technique"
              className="nav-link"
            >
              technique
            </Link>
          </li>

          <li className="nav-item ml-5">
            <Link onClick={displayOtherPage} to="/mobile" className="nav-link">
              mobile
            </Link>
          </li>
        </ul>
        <Link onClick={displayOtherPage} to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
              my shoping cart
            </span>
          </ButtonContainer>
        </Link>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.nav`
  .nav-link {
    color: var(--mainWhite) !important;
    font-family: "Bangers", cursive;
    font-size: 1.4rem;
    text-transform: capitalize;
  }
  .nav-link:hover {
    font-family: "Luckiest Guy", cursive;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  @media screen and (max-width: 768px) {
    .nav-link {
      font-size: 1rem;
      margin-left: -10px;
    }
    .nav-link:hover {
      font-size: 1.2rem;
    }
  }
`;
