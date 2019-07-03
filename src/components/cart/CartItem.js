import React, { Component } from "react";
import Img1 from "./../techniqueComponent/Mobile/images/htc.jpg";
import Img2 from "./../techniqueComponent/Mobile/images/nokia.jpg";
import Img3 from "./../techniqueComponent/Mobile/images/iPhone.jpg";
import Img4 from "./../techniqueComponent/Mobile/images/huawei.jpg";
import Img5 from "./../techniqueComponent/Mobile/images/samsung.jpg";
import Img6 from "./../techniqueComponent/Mobile/images/sony.jpg";
import Img7 from "./../techniqueComponent/Mobile/images/motorola.jpg";
import Img8 from "./../techniqueComponent/Mobile/images/alcatel.jpg";
import Img9 from "./../furnitureComponents/furniture pictures/furniture1.jpg";
import Img10 from "./../furnitureComponents/furniture pictures/furniture2.jpg";
import Img11 from "./../furnitureComponents/furniture pictures/furniture3.jpg";
import Img12 from "./../furnitureComponents/furniture pictures/furniture4.jpg";
import Img13 from "./../furnitureComponents/furniture pictures/furniture5.jpg";
import Img14 from "./../furnitureComponents/furniture pictures/furniture6.jpg";
import Img15 from "./../furnitureComponents/furniture pictures/furniture7.jpg";
import Img16 from "./../furnitureComponents/furniture pictures/furniture8.jpg";
import Img17 from "./../furnitureComponents/furniture pictures/furniture9.jpg";
import Img18 from "./../furnitureComponents/furniture pictures/furniture10.jpg";
import Img19 from "./../furnitureComponents/furniture pictures/furniture11.jpg";
import Img20 from "./../furnitureComponents/furniture pictures/furniture12.jpg";
import Img21 from "./../techniqueComponent/Laptop/laptop images/laptop1.jpg";
import Img22 from "./../techniqueComponent/Laptop/laptop images/laptop2.jpg";
import Img23 from "./../techniqueComponent/Laptop/laptop images/laptop3.jpg";
import Img24 from "./../techniqueComponent/Laptop/laptop images/laptop4.jpg";
import Img25 from "./../techniqueComponent/TV/TV images/tv1.jpg";
import Img26 from "./../techniqueComponent/TV/TV images/tv2.jpg";
import Img27 from "./../techniqueComponent/TV/TV images/tv3.jpg";
import Img28 from "./../techniqueComponent/TV/TV images/tv4.jpg";
import ButtonContainer from "./../Button.js";

export default class CartItem extends Component {
  state = {
    images: [
      Img1,
      Img2,
      Img3,
      Img4,
      Img5,
      Img6,
      Img7,
      Img8,
      Img9,
      Img10,
      Img11,
      Img12,
      Img13,
      Img14,
      Img15,
      Img16,
      Img17,
      Img18,
      Img19,
      Img20,
      Img21,
      Img22,
      Img23,
      Img24,
      Img25,
      Img26,
      Img27,
      Img28
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
            className="img-fluid img-cart"
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
