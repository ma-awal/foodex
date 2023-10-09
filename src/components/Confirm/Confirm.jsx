import React from 'react';
import './style.css';
import { BsCheck } from 'react-icons/bs';
const Confirm = () => {
  return (
    <div className="Confirm  shadow py-3    ">
      <h3 className="mb-3 common  text-center py-2">Finished</h3>
      <div className="box py-2 py-md-3  px-3">
        <h4 className="text-center">Your Order Confirmed !</h4>
        <div className="c-order m-auto">
          <span className=" my-check   mx-auto rounded-circle ">
            <BsCheck className="check fs-1  m-auto" />
          </span>
        </div>
        <p className="text-muted text-center mt-2 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          eveniet dolor ad incidunt tenetur nulla.
        </p>
      </div>
    </div>
  );
};

export default Confirm;
