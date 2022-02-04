import React from "react";

// eslint-disable-next-line react/prop-types
export const Item = ({ name, desc, price, img }) => {
  return (
    <div className="col-sm-6 col-md-5 col-lg-4 item px-5 mt-2">
      <div className="box">
        <img className="rounded img-fluid pizza-img" src={img} />
        <h3 className="name">{name}</h3>
        <p className="description">{desc}</p>
        <div className="d-flex justify-content-around align-items-center">
          <button type="button" className="btn btn-success">
            Add to basket
          </button>
          <span className="badge rounded-pill bg-danger price">{price}</span>
        </div>
      </div>
    </div>
  );
};
