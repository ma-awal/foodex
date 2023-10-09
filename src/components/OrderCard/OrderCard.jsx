import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './summery.css';
const OrderCard = () => {
  return (
    <div className="  box    ">
      <h3 className=" common text-white   py-2 text-center border  m-0">
        Your Order
      </h3>
      <div className="   shadow px-4 py-5">
        <ul className="list-group mb-3 border p-3 rounded-0 order ">
          <li className="d-flex justify-content-between align-items-center lh-lg">
            <span className="d-flex align-items-center gap-1">
              <AiOutlineMinusCircle className="fs-5 icon " />
              Burgers
            </span>
            <span className="qty">2piece</span>
            <span className="price">Tk : 343</span>
          </li>
          <li className="d-flex justify-content-between align-items-center lh-lg">
            <span className="d-flex align-items-center gap-1">
              <AiOutlineMinusCircle className="fs-5 icon " />
              Burgers
            </span>
            <span className="qty">2piece</span>
            <span className="price">Tk : 343</span>
          </li>
          <li className="d-flex justify-content-between align-items-center lh-lg">
            <span className="d-flex align-items-center gap-1">
              <AiOutlineMinusCircle className="fs-5 icon " />
              Burgers
            </span>
            <span className="qty">2piece</span>
            <span className="price">Tk : 343</span>
          </li>
          <li className="d-flex justify-content-between align-items-center lh-lg">
            <span className="d-flex align-items-center gap-1">
              <AiOutlineMinusCircle className="fs-5 icon " />
              Burgers
            </span>
            <span className="qty">2piece</span>
            <span className="price">Tk : 343</span>
          </li>
        </ul>
        <div className="border  p-3 ">
          <div className="items d-flex justify-content-between mb-3  ">
            <h4 className="    fw-semibold fs-4">
              Total <small>(inc.vat)</small>
            </h4>
            <h4 className="   fw-semibold fs-r">Tk : 3435</h4>
          </div>
          <div className="items text-center   ">
            <button className="btn rounded-0 py-2 common fs-4 fw-semibold  w-100">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
