import React from 'react';
import './style.css';
import { useApp } from '../../hook/useApp';

const FoodCard = ({ item }) => {
  const { addToCart } = useApp();

  return (
    <div className=" row  F-card justify-content-between align-items-center shadow  px-2 py-3 m-0 ">
      <div className="col-6 col-md-7">
        <div className="desc ">
          <h5>{item.title} </h5>
          <p>{item.description}</p>
          <h6 className="fw-semibold text-muted">
            TK : <span className="  ">{item.price}</span>
          </h6>
        </div>
      </div>
      <div className="col-6 col-md-5 text-end">
        <div className="image">
          <img src={item.img} className="img-fluid" alt=" " />
          <div className=" ">
            <button
              className=" btn btn-sm mt-2 btn-common"
              onClick={() => addToCart(item)}
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
