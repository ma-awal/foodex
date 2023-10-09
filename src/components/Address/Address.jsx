import React from 'react';
import './style.css';

const Address = () => {
  return (
    <div className="address shadow mb-5 ">
      <h3 className="mb-3 common text-center py-2">Personal Info</h3>
      <form action="" className=" pb-5   px-4 ">
        <div className="input_div    ">
          <div className="w-100 mb-3">
            <label htmlFor="name">Full Name</label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-100 form-control   "
              placeholder="Full Name"
            />
          </div>
        </div>
        <div className="input_div d-flex gap-3 justify-content-between mb-3 ">
          <div className="w-100">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-100 form-control   "
              placeholder="Your email"
            />
          </div>
          <div className="w-100  ">
            <label htmlFor="Phone">Phone </label>
            <input
              type="text"
              id="number"
              name="number"
              className="w-100 form-control  "
              placeholder="Your Number"
            />
          </div>
        </div>
        <div className="input_div  mb-3 ">
          <div className="w-100">
            <label htmlFor="address ">Full Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-100 form-control   "
              placeholder="Your full Address"
            />
          </div>
        </div>
        <div className="input_div d-flex gap-5 ,mb-3    ">
          <div className=" ">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="  form-control   "
              placeholder="City"
            />
          </div>
          <div className=" ">
            <label htmlFor="postal">Postal Code</label>
            <input
              type="text"
              id="postal"
              name="postal"
              className="w-100 form-control  "
              placeholder="Code"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Address;
