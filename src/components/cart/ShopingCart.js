import React from "react";
import styled from "styled-components";
import ButtonContainer from "./../Button";

export default function ShopingCart({ item, value }) {
  const { company, title, count, price } = item;
  const { closeBuyCart } = value;
  return (
    <CartContainer>
      <div id="info" className="col-11 mx-auto text-center p-4">
        {console.log(item)}
        <div
          style={{
            padding: "5px",
            boxShadow: "5px 5px 10px lightGrey",
            fontFamily: '"Prata", serif',
            fontWeight: "bold"
          }}
          className="row my-3 text-capitalize text-center"
        >
          <p>
            {company} {title}
          </p>
          <p>{count}</p>
          <ButtonContainer cart onClick={closeBuyCart}>
            print
          </ButtonContainer>
        </div>
      </div>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  position: fixed;
  width: 80%;
  top: 100px;
  right: 10%;
  bottom: 10%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #info {
    background: white;
    box-shadow: 5px 5px 15px white;
  }
`;
