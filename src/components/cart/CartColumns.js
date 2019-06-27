import React from "react";

export default function CartColumns() {
  return (
    <div
      style={{
        weight: "bolder",
        fontFamily: '"Permanent Marker", cursive',
        fontSize: "20px",
        boxShadow: "5px 5px 15px lightGrey"
      }}
      className="container-fluid text-center d-none d-lg-block"
    >
      <div className="row">
        <div className="col-10 mx-auto col-sm-2">
          <p className="text-uppercase">product</p>
        </div>
        <div className="col-10 mx-auto col-sm-2">
          <p className="text-uppercase">name</p>
        </div>
        <div className="col-10 mx-auto col-sm-2">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-sm-2">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-sm-2">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-sm-2">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
