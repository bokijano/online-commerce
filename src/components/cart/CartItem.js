import React, { Component } from "react";
import ImgOne from "./../techniqueComponent/Mobile/images/htc.jpg";
import ImgTwo from "./../techniqueComponent/Mobile/images/nokia.jpg";
import ImgThree from "./../techniqueComponent/Mobile/images/iPhone.jpg";
import ImgFour from "./../techniqueComponent/Mobile/images/huawei.jpg";
import ImgFive from "./../techniqueComponent/Mobile/images/samsung.jpg";
import ImgSix from "./../techniqueComponent/Mobile/images/sony.jpg";
import ImgSeven from "./../techniqueComponent/Mobile/images/motorola.jpg";
import ImgEight from "./../techniqueComponent/Mobile/images/alcatel.jpg";
import ButtonContainer from "./../Button.js";

export default class CartItem extends Component {
  state = {
    images: [
      ImgOne,
      ImgTwo,
      ImgThree,
      ImgFour,
      ImgFive,
      ImgSix,
      ImgSeven,
      ImgEight
    ]
  };
  render() {
    const { id, company, title, price, count, total } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;
    return (
      <div
        style={{
          padding: "5px",
          boxShadow: "5px 5px 10px lightGrey",
          fontFamily: '"Prata", serif',
          fontWeight: "bold"
        }}
        className="row my-3 text-capitalize text-center"
      >
        <div className="col-10 mx-auto col-lg-2">
          <img
            style={{ width: "3rem", height: "5rem" }}
            className="img-fluid"
            src={this.state.images[id - 1]}
            alt="product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product: </span>
          {company} {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price: </span>$ {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <span onClick={() => decrement(id)} className="btn btn-black mx-1">
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span onClick={() => increment(id)} className="btn btn-black mx-1">
              +
            </span>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <ButtonContainer cart onClick={() => removeItem(id)}>
            remove
          </ButtonContainer>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="d-lg-none">total: </div>$ {total}
        </div>
      </div>
    );
  }
}
