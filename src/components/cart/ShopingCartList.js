import React from "react";
import styled from "styled-components";
import ButtonContainer from "./../Button";

export default function ShopingCartList({ value }) {
  const { closeBuyCart, cart, cartTotal } = value;
  console.log(cart);
  return (
    <CartContainer>
      <div className="container">
        <div className="row">
          <div className="col-10 col-lg-12 text-center">
            <p>You buy {cart.length} products</p>
          </div>
          <div className="col-10 col-lg-12 text-center">
            {cart.map(item => {
              return (
                <div
                  key={item.id}
                  id="info"
                  className="col-11 mx-auto text-center p-4"
                >
                  <div
                    style={{ height: "30px" }}
                    className="row my-3 text-capitalize text-center"
                  >
                    <div className="col-10 mx-auto col-lg-12">
                      <p>
                        {item.company} {item.title}
                        <span>total amount: {item.count} </span>
                        <span>total price: {item.total} </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p>Your total account is: {cartTotal}</p>
          <div className="col-10 col-lg-12 text-center">
            <ButtonContainer onClick={closeBuyCart}>confirm</ButtonContainer>
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
