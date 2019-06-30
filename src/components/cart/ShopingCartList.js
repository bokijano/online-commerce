import React from "react";
import styled from "styled-components";
import ButtonContainer from "./../Button";
import { Link } from "react-router-dom";

export default function ShopingCartList({ value }) {
  const { closeBuyCart, cartTotal } = value;
  return (
    <CartContainer>
      <div className="container">
        <div className="row">
          <div className="col-10 total-acount">
            Your total account is: $ {cartTotal}
          </div>
          <div className="col-10 text-center">
            <Link to="/home">
              <ButtonContainer onClick={closeBuyCart}>confirm</ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </CartContainer>
  );
}
const CartContainer = styled.div`
  position: fixed;
  width: 80%;
  top: 0;
  right: 10%;
  bottom: 10%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  #info {
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
