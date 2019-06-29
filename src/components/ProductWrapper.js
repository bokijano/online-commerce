import styled from "styled-components";

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    margin-top: 20px;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-button {
    transform: translate(0%, 0%);
  }
  .cart-button:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .btn-display {
    position: absolute;
    width: 200px;
    top: 50%;
    right: 0;
    text-align: center;
    text-transform: capitalize;
    transition: all 0.3s linear;
    transform: translateX(101%);
    font-weight: bolder;
    font-family: "Prata", serif;
  }
  .img-container:hover .btn-display {
    transform: translateX(0%);
    cursor: pointer;
  }
  .btn-display:hover {
    background: blue;
    opacity: 1;
  }
  .btn-display:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    .card:first-child {
      margin-top: 100px !important;
    }
  }
`;

export default ProductWrapper;
