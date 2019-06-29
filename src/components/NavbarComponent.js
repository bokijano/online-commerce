import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import ButtonContainer from "./Button";
import Phone from "./../phone.svg";

export default class NavbarComponent extends Component {
  render() {
    const { displayOtherPage } = this.props;
    return (
      <NavbarWrapper className="navbar bg-primary navbar-dark px-sm-5 fixed-top">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/home">
            <Link to="/home">
              <img src={Phone} alt="brand phone" className="navbar-brand" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <ul className="navbar-nav align-i">
                <Nav.Link href="/furniture" className="nav-item ml-5">
                  <Link
                    onClick={displayOtherPage}
                    to="/furniture"
                    className="nav-link"
                  >
                    furniture
                  </Link>
                </Nav.Link>

                <Nav.Link href="/technique" className="nav-item ml-5">
                  <Link
                    onClick={displayOtherPage}
                    to="/technique"
                    className="nav-link"
                  >
                    technique
                  </Link>
                </Nav.Link>

                <Nav.Link href="/mobile" className="nav-item ml-5">
                  <Link
                    onClick={displayOtherPage}
                    to="/mobile"
                    className="nav-link"
                  >
                    mobile
                  </Link>
                </Nav.Link>
              </ul>
            </Nav>
          </Navbar.Collapse>

          <Nav.Link href="/cart">
            <Link onClick={displayOtherPage} to="/cart" className="ml-10">
              <ButtonContainer className="butt-nav">
                <span>
                  <i className="fas fa-cart-plus mr-2" />
                  shoping cart
                </span>
              </ButtonContainer>
            </Link>
          </Nav.Link>
        </Navbar>
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
    margin-left: 50px;
    margin-top: -10px;
  }
  .nav-link:hover {
    font-family: "Luckiest Guy", cursive;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .butt-nav {
    margin-left: 200px;
    margin-top: -10px;
  }
  .navbar-brand {
    margin-top: -15px;
  }
  @media screen and (max-width: 768px) {
    .butt-nav {
      margin-left: 5px;
      font-size: 1.3rem;
      margin-top: 15px;
    }
    .navbar-brand {
      margin-top: 0px;
    }
  }
  @media screen and (min-width: 769px) {
    height: 60px;
  }
`;
